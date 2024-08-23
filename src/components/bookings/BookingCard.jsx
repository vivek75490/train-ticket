import React from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
import config from "../../config"

const BookingCard = ({ booking, setBookings }) => {
  const getTicketStatusColor = (status) => {
    switch (status) {
      case "CONFIRM":
        return "success";
      case "WAITING":
        return "warning";
      case "CANCEL":
        return "danger";
      default:
        return "dark";
    }
  };

  // const navigate = useNavigate();

  const cancelBooking = async (pnrNumber, ticketId) => {
    try {
      await axios.post(
        `${config.server}/refund/${pnrNumber}/tickets/${ticketId}/cancel`
      );
      toast.success("Booking canceled successfully!");
      // Update the bookings list by filtering out the canceled booking
      setBookings((prevBookings) =>
        prevBookings.map((prevBooking) => ({
          ...prevBooking,
          tickets: prevBooking.tickets.map((ticket) => {
            if (ticket.ticketId === ticketId) {
              return {
                ...ticket,
                status: "CANCEL",
              };
            }
            window.location.href="/mybookings"
            // navigate("/mybookings");
            return ticket;
          }),
        }))
      );
    } catch (error) {
      console.error("Error canceling booking:", error);
      toast.error("Cannot cancel a previous booking !.");
    }
  };

  return (
    <MDBCard className="text-dark mb-3 mt-5 w-100">
      <MDBCardBody className="bg-primary text-white">
        PNR: {booking.pnrNumber}
      </MDBCardBody>
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <MDBCardTitle>Seats: {booking.tickets.length}</MDBCardTitle>
            <MDBCardText>
              From: {booking.fromStation}
              <br />
              To: {booking.toStation}
              <br />
              Date: {booking.dateOfJourney}
            </MDBCardText>
          </MDBCol>
          <MDBCol>
            <MDBCardTitle>Passenger Details:</MDBCardTitle>
            <MDBListGroup>
              {booking.tickets.map((ticket, index) => (
                <MDBListGroupItem
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span
                    className={`fw-bold text-${getTicketStatusColor(
                      ticket.status
                    )}`}
                  >
                    Seat Number: {ticket.seatNumber}, Status: {ticket.status}
                  </span>
                  {ticket.status !== "CANCEL" && (
                    <button
                      color="danger"
                      className="btn btn-outline-danger ms-2"
                      onClick={() =>
                        cancelBooking(booking.pnrNumber, ticket.ticketId)
                      }
                    >
                      Cancel Booking
                    </button>
                  )}
                
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BookingCard;
