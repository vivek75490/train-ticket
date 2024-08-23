// FeedbackComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config'; // Import the server URL from config.js

const FeedbackComponent = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`${config.server}/feedback/getAllFeedback`);
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchFeedback = async () => {
    try {
      const response = await axios.get(`${config.server}/api/feedback?userId=${searchTerm}`);
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error searching feedback:', error);
    }
  };

  const filteredFeedback = feedbackData.filter((feedback) =>
    feedback.userId.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>User Feedback</h1>
      <div className="row mb-4">
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            placeholder="Enter User ID to Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary w-100" onClick={searchFeedback}>
            Search by User ID
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Feedback ID</th>
            <th>UserID</th>
            <th>Email</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedback.length > 0 ? (
            filteredFeedback.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.userId}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No feedback found matching your search.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackComponent;
