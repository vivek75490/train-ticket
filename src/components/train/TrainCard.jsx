import React from "react";

const TrainCard = ({ train, onToggleStatus }) => {
  const statusColor =
    train.activeStatus ? "text-success" : "text-danger";

  return (
    <div className={`row ${statusColor} mb-2`}>
      <div className="col">{train.trainNumber}</div>
      <div className="col">{train.trainName}</div>
      <div className="col">{train.activeStatus ? "Active" : "Inactive"}</div>
      <div className="col">
        <button
          className={`btn btn-sm ${
            train.activeStatus ? "btn-danger" : "btn-success"
          }`}
          onClick={() => onToggleStatus(train.trainNumber, train.activeStatus ? "inactive" : "active")}
        >
          {train.activeStatus ? "Set Inactive" : "Set Active"}
        </button>
      </div>
    </div>
  );
};

export default TrainCard;
