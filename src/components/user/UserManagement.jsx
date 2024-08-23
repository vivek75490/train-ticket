import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import config from '../../config';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.server}/users/getAllUsers`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = users.filter(
      (user) =>
        user.id.toString().includes(searchTerm) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleToggleInactive = async (userId) => {
    try {
      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            active: false,
          };
        }
        return user;
      });

      setUsers(updatedUsers);

      // Update status to inactive on the backend
      await axios.put(`${config.server}/users/${userId}/status/inactive`);
    } catch (error) {
      console.error("Error toggling user status to inactive:", error);
    }
  };

  const handleToggleActive = async (userId) => {
    try {
      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            active: true,
          };
        }
        return user;
      });

      setUsers(updatedUsers);

      // Update status to active on the backend
      await axios.put(`${config.server}/users/${userId}/status/active`);
    } catch (error) {
      console.error("Error toggling user status to active:", error);
    }
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>User Management</h1>
        <div className="row mb-4">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter User ID, Username, or Email"
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
            <div className="col">User ID</div>
            <div className="col">Username</div>
            <div className="col">Email</div>
            <div className="col">Status</div>
            <div className="col">Actions</div>
          </div>

          {filteredUsers.length > 0
            ? filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onToggleInactive={handleToggleInactive}
                  onToggleActive={handleToggleActive}
                />
              ))
            : users.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onToggleInactive={handleToggleInactive}
                  onToggleActive={handleToggleActive}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
