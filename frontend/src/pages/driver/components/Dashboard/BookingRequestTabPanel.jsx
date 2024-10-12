import React, { useState, useEffect } from "react";
import BookingService from "../../../../services/driver/BookingService";
const BookingRequestTabPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
        setLoading(true); // Ensure loading starts at true

        try {
            const data = await BookingService.ListByStatus(1);

            if (data && Array.isArray(data)) {
                setBookings(data);
            } else {
                throw new Error("Unexpected response format.");
            }
        } catch (err) {
            console.error("Error fetching booking data:", err);
            setError("Failed to fetch booking history.");
        } finally {
            setLoading(false); // Set loading to false once the operation is complete
        }
    };

    fetchBookings();
}, []);
  // Approve a request
  const handleApprove = async (id) => {
    const data = await BookingService.Confirm(id);
    setBookings(
      bookings.map((request) =>
        request.id === id ? { ...request, status: "approved" } : request
      )
    );
  };

  // Reject a request
  const handleReject = async (id) => {
    const data = await BookingService.Cancel(id);
    setBookings(
      bookings.map((request) =>
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
        {bookings.length === 0 ? (
          <p>No requests available.</p>
        ) : (
          bookings.map((request) => (
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
                    <strong>Pickup Location:</strong> {request.pickUpPlace}
                  </p>
                  <p className="card-text">
                    <strong>Dropoff Location:</strong> {request.dropOffPlace}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {request.status}
                  </p>
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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingRequestTabPanel;
