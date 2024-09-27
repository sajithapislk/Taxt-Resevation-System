import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import UnregisterUserService from "../../services/admin/UnregisterUserService";
import ReservationService from "../../services/admin/ReservationService";

const Reservation = () => {
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [reservationData, setReservationData] = useState({
    vehicle_type_id: "",
    unregistered_user_id: "",
    picked: "",
    pick_at: "",
  });
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    tp: "",
  });

  const handleChangeReservation = (e) => {
    const { name, value } = e.target;

    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    console.log(name);

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const searchUser = async () => {
    setError("");
    // const result = await UnregisterUserService.FilterByTp(searchTerm);
    const result = {
      id: 123,
      name: "John Doe",
      tp: "0123456789",
      // error: "asd"
    };

    if (result.error) {
      setNewUser(true);
    } else {
      setUserData(result);
    }
  };

  const handleBooking = async () => {
    if (
      !reservationData.picked ||
      !reservationData.pick_at ||
      !reservationData.vehicle_type_id
    ) {
      setError("Please fill in all booking fields");
      return;
    }

    const result = await ReservationService.Booking(reservationData);

    if (result.error) {
      setError("Error creating booking");
    } else {
      setBookingSuccess(true);
      setError("");
    }
  };
  const handleUser = async () => {
    if (
      !userData.name ||
      !userData.tp 
    ) {
      setError("Please fill in all user fields");
      return;
    }

    const result = await UnregisterUserService.Register(userData);

    if (result.error) {
      setError("Error creating booking");
    } else {
      setUserData(result.user);
      setError("");
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
                <Form.Label>Search User (by TP)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user TP"
                  value={userData.tp}
                  name="tp"
                  onChange={handleChangeUser}
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
            {userData.id && (
              <Alert variant="success" className="mt-3">
                <strong>Found User:</strong> {userData.name} (TP: {userData.tp}
                ), ID: {userData.id}
              </Alert>
            )}
            {newUser && (
              <Form className="mt-4">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChangeUser}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="tp"
                        value={userData.tp}
                        onChange={handleChangeUser}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button
                      variant="success"
                      className="mt-4 "
                      onClick={handleUser}
                    >
                      Create User
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
            {/* Booking Form (if user is found) */}
            {userData.id && (
              <Form className="mt-4">
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Pick-up Date & Time</Form.Label>
                      <Form.Control
                        type="text"
                        name="picked"
                        value={reservationData.picked}
                        onChange={handleChangeReservation}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Pick-out Date & Time</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="pick_at"
                        value={reservationData.pick_at}
                        onChange={handleChangeReservation}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mt-3">
                  <Form.Label>Vehicle Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="vehicle_type_id"
                    value={reservationData.vehicle_type_id}
                    onChange={handleChangeReservation}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="1">Car</option>
                    <option value="2">Truck</option>
                    <option value="3">Bike</option>
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
