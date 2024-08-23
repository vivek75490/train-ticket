import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config";

const BookingSuccess = () => {
  const [feedback, setFeedback] = useState("");
  const [submittingFeedback, setSubmittingFeedback] = useState(false);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setSubmittingFeedback(true);
    try {
      await axios.post(
        `${config.server}/feedback/feedbackByUser`,
        { feedback, userId: 2 } // Hardcoded user ID 2
      );
      toast.success("Feedback submitted successfully!");
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again later.");
    } finally {
      setSubmittingFeedback(false);
    }
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <>
      <div>
        <ToastContainer />
        <div className="container mt-5">
          <div className="text-center">
            <div className="alert alert-success">
              Your Ticket is Booked Successfully! You can see it in My bookings.
            </div>
          </div>

          <div className="text-center">
            <Link to="/mybookings">
              <button type="button" className="btn btn-primary mr-2 mx-5">
                My Bookings
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="btn btn-primary mx-5">
                Home Page
              </button>
            </Link>
          </div>

          <div className="mt-3">
            <div className="alert alert-warning">
              Confirmation is sent to email and mobile number.
            </div>
          </div>

          <div className="mt-3">
            <form onSubmit={handleFeedbackSubmit}>
              <div className="form-group">
                <h4 htmlFor="feedback">Submit feedback for our Railconnect Website :</h4>
                <textarea
                  className="form-control"
                  id="feedback"
                  rows="3"
                  value={feedback}
                  onChange={handleFeedbackChange}
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary" disabled={submittingFeedback}>
                {submittingFeedback ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;
