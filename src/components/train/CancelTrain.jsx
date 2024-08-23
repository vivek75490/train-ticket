import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from '../../config';

const CancelTrain = () => {
  const [cancelDate, setCancelDate] = useState("");
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains(); // Fetch trains initially
  }, []); // No dependencies, fetch once on component mount

  const fetchTrains = () => {
    axios
      .get(`${config.server}/trains/view`)
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.error("Error fetching train data:", error);
      });
  };
  const handleCancelTrain = (trainNumber) => {
    // Make a request to cancel the train with the specified trainNumber and cancelDate
    axios
      .put(`${config.server}/trains/${trainNumber}/cancel`, null, {
        params: { cancelDate },
      })
      .then((response) => {
        if (response.status===200) {
          // Display success message if cancellation is successful
          console.log(`Train ${trainNumber} successfully cancelled.`);

          toast.success(`Train ${trainNumber} successfully cancelled.`);
        } else {
          // Display error message if cancellation is not successful
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error cancelling train:", error);
        // Display error message for any other errors
        toast.error("Cannot cancel the train on a day when it's not scheduled to run.");
      });
  };
  


  return (
    <div className="container-fluid mt-5">
      <h1>Cancel Train</h1>
      <div className="row mb-4">
        <div className="col-9">
          <input
            type="date"
            className="form-control"
            placeholder="Select Date to Cancel"
            value={cancelDate}
            onChange={(e) => setCancelDate(e.target.value)}
          />
        </div>
      </div>

      <div className="border border-dark p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Train Name</th>
              <th>Runs On</th>
              <th>Cancel Train</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train) => (
              <tr key={train.trainNumber}>
                <td>{train.trainNumber}</td>
                <td>{train.trainName}</td>
                <td>{train.runsOn}</td>
                <td>
                  {!train.canceled && (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleCancelTrain(train.trainNumber)}
                    >
                      Cancel
                    </button>
                  )}
                  {train.canceled && (
                    <span className="text-muted">Cancelled</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CancelTrain;
