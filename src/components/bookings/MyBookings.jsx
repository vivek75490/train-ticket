import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";
import "bootstrap/dist/css/bootstrap.min.css";
import config from '../../config';
import { useAuth } from "../../contexts/AuthContext";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const { userId: user } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = user;
        const response = await axios.get(`${config.server}/bookings/mybookings`, {
          headers: {
            userId: userId
          }
        });
        setBookings(response.data);
        setFilteredBookings(response.data); 
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [user]);

  const currentDate = new Date();

  const handleAllBookings = () => {
    setFilteredBookings(bookings);
  };

  const handlePreviousBookings = () => {
    const previousBookings = bookings.filter(booking => new Date(booking.dateOfJourney) < currentDate);
    setFilteredBookings(previousBookings);
  };

  const handleUpcomingBookings = () => {
    const upcomingBookings = bookings.filter(booking => new Date(booking.dateOfJourney) >= currentDate);
    setFilteredBookings(upcomingBookings);
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={handleAllBookings}>
          All Bookings
        </button>
        <button className="btn btn-danger me-2" onClick={handlePreviousBookings}>
          Previous Bookings
        </button>
        <button className="btn btn-success" onClick={handleUpcomingBookings}>
          Upcoming Bookings
        </button>
      </div>
      {filteredBookings.map((booking, index) => (
        <div className="row mb-3" key={index}>
          <div className="col">
            <BookingCard booking={booking} setBookings={setBookings} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
