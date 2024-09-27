import React, { useState } from "react";
const BookingRequest = () => {
  const initialRequests = [
    {
      id: 1,
      pickupLocation: "123 Main St",
      dropoffLocation: "456 Elm St",
      pickupTime: "2024-09-28T10:30",
      status: "pending",
    },
    {
      id: 2,
      pickupLocation: "789 Oak Ave",
      dropoffLocation: "321 Pine Blvd",
      pickupTime: "2024-09-29T12:00",
      status: "pending",
    },
  ];

  // State to manage requests
  const [requests, setRequests] = useState(initialRequests);

  // Approve a request
  const handleApprove = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "approved" } : request
      )
    );
  };

  // Reject a request
  const handleReject = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "rejected" } : request
      )
    );
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Taxi Reservation Requests</h1>

      {/* Requests List */}
      <h2>Request List</h2>
      <div className="row">
        {requests.length === 0 ? (
          <p>No requests available.</p>
        ) : (
          requests.map((request) => (
            <div className="col-md-4 mb-3" key={request.id}>
              <div
                className={`card text-white ${
                  request.status === "approved"
                    ? "bg-success"
                    : request.status === "rejected"
                    ? "bg-danger"
                    : "bg-secondary"
                }`}
              >
                <div className="card-body">
                  <h5 className="card-title">Request #{request.id}</h5>
                  <p className="card-text">
                    <strong>Pickup Location:</strong> {request.pickupLocation}
                  </p>
                  <p className="card-text">
                    <strong>Dropoff Location:</strong> {request.dropoffLocation}
                  </p>
                  <p className="card-text">
                    <strong>Pickup Time:</strong>{" "}
                    {new Date(request.pickupTime).toLocaleString()}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {request.status}
                  </p>
                  {request.status === "pending" && (
                    <div className="d-flex">
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleApprove(request.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleReject(request.id)}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingRequest;
