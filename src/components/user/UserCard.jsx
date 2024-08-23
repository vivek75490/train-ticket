import React from "react";

const UserCard = ({ user, onToggleInactive, onToggleActive }) => {
  const statusColor = user.active ? "text-success" : "text-danger";

  return (
    <div className={`row ${statusColor} mb-2`}>
      <div className="col">{user.id}</div>
      <div className="col">{user.username}</div>
      <div className="col">{user.email}</div>
      <div className="col">{user.active ? "Active" : "Inactive"}</div>
      <div className="col">
        <button
          className={`btn btn-sm btn-danger me-2`}
          onClick={() => onToggleInactive(user.id)}
          disabled={!user.active}
        >
          Set Inactive
        </button>
        <button
          className={`btn btn-sm btn-success`}
          onClick={() => onToggleActive(user.id)}
          disabled={user.active}
        >
          Set Active
        </button>
      </div>
    </div>
  );
};

export default UserCard;
