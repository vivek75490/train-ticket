import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainCard from "./TrainCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from '../../config';

const TrainStatus = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = () => {
    axios
      .get(`${config.server}/trains/view`)
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error("Error fetching trains:", error);
      });
  };

  const handleSearch = () => {
    const filtered = trains.filter(
      (train) =>
        train.trainNumber.toString().includes(searchTerm) ||
        train.trainName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrains(filtered);
  };

  const handleToggleStatus = (trainNumber, newStatus) => {
    const endpoint =
      newStatus === "active"
        ? `${config.server}/trains/activate/${trainNumber}`
        : `${config.server}/trains/remove/${trainNumber}`;
    axios
      .put(endpoint)
      .then((response) => {
        if (response.status === 200) {
          // Update the status of the train locally
          setTrains((prevTrains) =>
            prevTrains.map((train) =>
              train.trainNumber === trainNumber ? { ...train, activeStatus: newStatus === 'active' } : train
            )
          );
          // Display success message
          toast.success(
            `Train ${trainNumber} ${newStatus === "active" ? "activated" : "deactivated"} successfully.`
          );
        } else {
          console.error(
            `Error setting train ${trainNumber} status:`,
            response.data
          );
          // Display error message
          toast.error(
            `Error setting train ${trainNumber} status. Please try again.`
          );
        }
      })
      .catch((error) => {
        console.error(`Error setting train ${trainNumber} status:`, error);
        // Display error message
        toast.error(
          `Error setting train ${trainNumber} status. Please try again.`
        );
      });
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>Set Train Status</h1>
        <div className="row mb-4">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Train Number or Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100" onClick={handleSearch}>
              🔎 Search
            </button>
          </div>
        </div>

        <div className="border border-dark p-3">
          <div className="row fw-bold mb-2">
            <div className="col">Train Number</div>
            <div className="col">Train Name</div>
            <div className="col">Status</div>
            <div className="col">Actions</div>
          </div>

          {filteredTrains.length > 0
            ? filteredTrains.map((train) => (
                <TrainCard
                  key={train.trainNumber}
                  train={train}
                  onToggleStatus={handleToggleStatus}
                />
              ))
            : trains.map((train) => (
                <TrainCard
                  key={train.trainNumber}
                  train={train}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default TrainStatus;
