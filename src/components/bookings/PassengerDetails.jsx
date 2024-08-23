// PassengerDetails.jsx
import React, { useState } from 'react';
import PassengerRow from './PassengerRow';
import FareSummary from './FareSummary';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import config from '../../config';

const PassengerDetails = () => {

  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([{ id: 1, name: '', gender: '', age: '' }]);
  const maxPassengers = 4;
  const location = useLocation();
  const { userId } = useAuth();
  const { data, selectedClass } = location.state || {};
  const baseFare = data.baseFare;

  const handlePassengerDetails = (index, details) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index] = details;
    setPassengers(updatedPassengers);
  };

  const addPassenger = () => {
    if (passengers.length < maxPassengers) {
      const newPassenger = { id: passengers.length + 1, name: '', gender: '', age: '' };
      setPassengers([...passengers, newPassenger]);
    } else {
      toast.error('You cannot add more than 4 passengers');
    }
  };

  const bookingDetails = {
    coachType: selectedClass.type,
    userId: userId,
    trainNumber: data.trainNumber,
    tickets: passengers.map((passenger) => ({
      passenger : {
        passengerName: passenger.name,
        gender: passenger.gender,
        passengerAge: passenger.age
      }
    })),
    fromStation: data.source,
    toStation: data.destination,
    bookingDateTime: new Date(),
    dateOfJourney: data.dateOfJourney,
    totalAmount: baseFare * passengers.length
  };

  console.log(bookingDetails);

  const handleBookTicket = () => {
    // Logic for booking ticket
    axios.post(`${config.server}/bookings/addnewbooking`,bookingDetails)
    .then((response) => {
      toast.success("Tickets booked successFully !!!");
      console.log(response.data);
      navigate("/booksuccess");
    }).catch((error) => {
      toast.error("Something went wrong !!!")
      console.log(error.data);
      navigate("/trainlist");
    })
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col">
              <h2>Passenger Details</h2>
            </div>
            <div className="col-auto">
              <button onClick={addPassenger} className="btn btn-info">
                Add Passenger
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {passengers.map((passenger, index) => (
                <PassengerRow
                  key={passenger.id}
                  onPassengerDetailsChange={(details) => handlePassengerDetails(index, details)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <FareSummary baseFare={baseFare} passengersCount={passengers.length} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Link to="/booksuccess">
            <button className="btn btn-primary" onClick={handleBookTicket}>
              Book Ticket
            </button>
          </Link>
        </div>
        <div className="col">
          <button className="btn btn-success">Make Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
