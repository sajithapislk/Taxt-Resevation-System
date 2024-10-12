// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import BookingService from "../../../../services/driver/BookingService";

// Simulate backend price calculation (replace with actual backend call)
const fetchPriceFromBackend = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(50); // Simulate a price of $50
    }, 1000);
  });
};

const ContinueRideTabPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchContinueRide = async () => {
      const res = await BookingService.ListByStatus(2);
      console.log(res);
      if (!res.error) {
        setBookings(res);
      } else {
        console.error(res.error);
      }
    };

    fetchContinueRide();
  }, []);

  const [activeRide, setActiveRide] = useState(null);
  const [rideStatus, setRideStatus] = useState(null);
  const [ridePrice, setRidePrice] = useState(null);
  const [loadingPrice, setLoadingPrice] = useState(false);

  // Handle driver accepting a ride
  const handleAcceptRequest = (data) => {
    // const acceptedRequest = bookings.find((request) => request.id === id);
    setActiveRide(data);
    setRideStatus("accepted");
  };

  // Handle starting the ride
  const handleStartRide = async () => {
    const data = await BookingService.Start(activeRide.id);
    setRideStatus("started");
  };

  // Handle ending the ride and fetching the price
  const handleEndRide = async () => {
    setRideStatus("ended");
    setLoadingPrice(true);
    const data = await BookingService.Complete(activeRide.id);
    setRidePrice(data.price.toFixed(2));
    setLoadingPrice(false);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Available Requests</h1>

      {/* Pending Requests List (if no active ride) */}
      {!activeRide && (
          <div className="row">
            {bookings.length === 0 ? (
              <p>No pending requests available.</p>
            ) : (
              bookings.map((request) => (
                <div className="col-md-4 mb-3" key={request.id}>
                  <div className="card bg-secondary text-white">
                    <div className="card-body">
                      <h5 className="card-title">Request #{request.id}</h5>
                      <p className="card-text">
                        <strong>Pickup Location:</strong> {request.pickUpPlace}
                      </p>
                      <p className="card-text">
                        <strong>Dropoff Location:</strong> {request.dropOffPlace}
                      </p>
                      <p className="card-text">
                        <strong>Pickup Time:</strong> {new Date(request.pickUpTime).toLocaleString()}
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAcceptRequest(request)}
                      >
                        Continue Ride
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
      )}

      {/* Active Ride Management (if ride is accepted) */}
      {activeRide && (
        <div>
          <h2>Active Ride</h2>
          <div className="card bg-info text-white mb-3">
            <div className="card-body">
              <h5 className="card-title">Ride #{activeRide.id}</h5>
              <p className="card-text">
                <strong>Pickup Location:</strong> {activeRide.pickUpPlace}
              </p>
              <p className="card-text">
                <strong>Dropoff Location:</strong> {activeRide.dropOffPlace}
              </p>
              <p className="card-text">
                <strong>Pickup Time:</strong> {new Date(activeRide.pickUpTime).toLocaleString()}
              </p>
              <p className="card-text">
                <strong>Ride Status:</strong> {rideStatus}
              </p>

              {/* Ride Control Buttons */}
              {rideStatus === "accepted" && (
                <button className="btn btn-success" onClick={handleStartRide}>
                  Start Ride
                </button>
              )}
              {rideStatus === "started" && (
                <button className="btn btn-danger" onClick={handleEndRide}>
                  End Ride
                </button>
              )}

              {/* Show ride price when the ride ends */}
              {rideStatus === "ended" && (
                <div className="mt-3">
                  {loadingPrice ? (
                    <p>Calculating price...</p>
                  ) : (
                    <p>
                      <strong>Total Price:</strong> LKR {ridePrice}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContinueRideTabPanel;