import React from "react";

const TrainCard2 = ({ train, onCancelTrain }) => {
  const statusColor = train.status === "cancelled" ? "text-danger" : "text-success";

  return (
    <div className={`row mb-2 ${statusColor}`}>
      <div className="col">{train.tno}</div>
      <div className="col">{train.tname}</div>
      <div className="col">{train.source}</div>
      <div className="col">{train.dest}</div>
      <div className="col">{train.date}</div>
      <div className="col">{train.status || "Running"}</div>
      <div className="col">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onCancelTrain(train.tno)}
        >
          Cancel Train
        </button>
      </div>
    </div>
  );
};

export default TrainCard2;
