import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import UnregisterUserService from "../../services/admin/UnregisterUserService";
import ReservationService from "../../services/admin/ReservationService";

const Reservation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [picked, setPicked] = useState("");
  const [pickOut, setPickOut] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Function to search for the user
  const searchUser = async () => {
    setError("");
    // const result = await UnregisterUserService.FilterByTp(searchTerm);
    result = {
      user: {
        id: 123,
        name: "John Doe",
        tp: "0123456789",
      },
    };

    if (result.error) {
      setUser(null);
    } else {
      setUser(result);
    }
  };

  // Function to handle booking submission
  const handleBooking = async () => {
    if (!picked || !pickOut || !vehicleType) {
      setError("Please fill in all booking fields");
      return;
    }

    const bookingData = {
      type: vehicleType,
      unregistered_user_id: user.id,
      picked,
      pick_out: pickOut,
    };

    const result = await ReservationService.Booking(bookingData);

    if (result.error) {
      setError("Error creating booking");
    } else {
      setBookingSuccess(true);
    }
  };

  return (
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="title">
                  <h4>Reservation</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="pd-20 card-box mb-30">
            {/* Search User Form */}
            <Form>
              <Form.Group>
                <Form.Label>Search User (by Name or TP)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user name or TP"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={searchUser}>
                Search User
              </Button>
            </Form>

            {/* Display User Info or Error */}
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
            {user && (
              <Alert variant="success" className="mt-3">
                <strong>Found User:</strong> {user.name} (TP: {user.tp}), ID:{" "}
                {user.id}
              </Alert>
            )}

            {/* Booking Form (if user is found) */}
            {user && (
              <Form className="mt-4">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Pick-up Date & Time</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        value={picked}
                        onChange={(e) => setPicked(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Pick-out Date & Time</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        value={pickOut}
                        onChange={(e) => setPickOut(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mt-3">
                  <Form.Label>Vehicle Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Bike">Bike</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  variant="success"
                  className="mt-3"
                  onClick={handleBooking}
                >
                  Create Booking
                </Button>

                {bookingSuccess && (
                  <Alert variant="success" className="mt-3">
                    Booking successfully created!
                  </Alert>
                )}
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
