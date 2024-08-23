import React, { useState, useEffect } from "react";
import config from '../../config'; // Import the server URL from config.js

const PaymentManagement = () => {
  const [checkedTicketIds, setCheckedTicketIds] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [activeTab, setActiveTab] = useState("initiate");

  useEffect(() => {
    fetchRefunds();
  }, []);

  const fetchRefunds = async () => {
    try {
      const response = await fetch(`${config.server}/refund/getAllRefundList`);
      const data = await response.json();
      setRefunds(data);
    } catch (error) {
      console.error("Error fetching refunds:", error);
    }
  };

  const toggleTicketSelection = (ticketId) => {
    setCheckedTicketIds((prevCheckedTicketIds) =>
      prevCheckedTicketIds.includes(ticketId)
        ? prevCheckedTicketIds.filter((id) => id !== ticketId)
        : [...prevCheckedTicketIds, ticketId]
    );
  };

  const initiateRefund = async () => {
    try {
      const response = await fetch(`${config.server}/refund/updateStatus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkedTicketIds),
      });
      if (response.ok) {
        // Reload refunds data after initiating refunds
        fetchRefunds();
        // Clear selected ticket IDs
        setCheckedTicketIds([]);
      } else {
        console.error("Failed to initiate refunds:", response.statusText);
      }
    } catch (error) {
      console.error("Error initiating refunds:", error);
    }
  };

  const filterRefunds = (refundStatus) => {
    return refunds.filter((refund) => refund.refundStatus === refundStatus);
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
      <div className="container">
        <h1>Payment Management</h1>
        <div className="mb-3">
          <button
            className={`btn ${activeTab === "initiate" ? "btn-primary" : "btn-secondary"} me-2`}
            onClick={() => setActiveTab("initiate")}
          >
            Initiate Refund
          </button>
          <button
            className={`btn ${activeTab === "refunded" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setActiveTab("refunded")}
          >
            Already Refunded
          </button>
        </div>

        <div className="border border-dark p-3">
          <div className="row fw-bold mb-2">
            <div className="col">Train Number</div>
            <div className="col">Train Name</div>
            <div className="col">Ticket Id</div>
            <div className="col">Amount</div>
            <div className="col">Reason</div>
            {activeTab === "initiate" && <div className="col">Refund Initiated</div>}
          </div>
          {filterRefunds(activeTab === "initiate" ? false : true).map((refund) => (
            <div className="row mb-2" key={refund.ticketId}>
              <div className="col">{refund.trainNumber}</div>
              <div className="col">{refund.trainName}</div>
              <div className="col">{refund.ticketId}</div>
              <div className="col">{refund.amount}</div>
              <div className="col">{refund.reason}</div>
              {activeTab === "initiate" && (
                <div className="col">
                  <input
                    type="checkbox"
                    checked={checkedTicketIds.includes(refund.ticketId)}
                    onChange={() => toggleTicketSelection(refund.ticketId)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {activeTab === "initiate" && (
          <div className="mt-3">
            <button
              className="btn btn-success"
              onClick={initiateRefund}
              disabled={checkedTicketIds.length === 0}
            >
              Initiate Refund
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentManagement;
