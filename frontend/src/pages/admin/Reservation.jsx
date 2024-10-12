import React, { useState, useEffect, useRef, useCallback } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import ReservationService from "../../services/admin/ReservationService";
import UserService from "../../services/admin/UserService";
import {
  GoogleMap,
  useLoadScript,
  Autocomplete,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import VehicleTypeService from "../../services/admin/VehicleTypeService";
import { useNavigate } from "react-router-dom";

const libraries = ["places"];
const _googleMapsApiKey =
  import.meta.env.GOOGLE_MAP_API_KEY ||
  "AIzaSyCP6SvRsh7Ba3lOFKEjRxX6dZqkwH6U7H0";


const Reservation = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: _googleMapsApiKey,
    libraries,
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [vehicleTypeList, setVehicleTypeList] = useState([]);

  const pickupRef = useRef();
  const destinationRef = useRef();

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    mobileNo: "",
  });
  
  const [formData, setFormData] = useState({
    vehicleTypeId: "",
    userId: "",
    pickUpPlace: "",
    pickUpLongitude: "",
    pickUpLatitude: "",
    dropOffPlace: "",
    dropOffLongitude: "",
    dropOffLatitude: "",
  });


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
    const result = await UserService.FilterByTp(userData.mobileNo);
    
    if (result.error) {
      setNewUser(true);
    } else {
      setUserData(result);
    }
  };
  const handleUser = async () => {
    if (
      !userData.name ||
      !userData.mobileNo 
    ) {
      setError("Please fill in all user fields");
      return;
    }

    const result = await UserService.Unregister(userData);

    if (result.error) {
      setError("Error creating booking");
    } else {
      setFormData((prevData) => ({
        ...prevData,
        userId: result.id
      }));
      setUserData((prevData) => ({
        ...prevData,
        id: result.id
      }));
      setError("");
    }
  };

  const handlePickupPlaceSelect = useCallback(() => {
    const place = pickupRef.current?.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      console.log(lat, lng);
      const placeName =
        place.formatted_address || place.name || "Unknown Place";

      // setPickupCoords({ lat, lng });
      setFormData((prevData) => ({
        ...prevData,
        pickUpPlace: placeName,
        pickUpLongitude: lng,
        pickUpLatitude: lat,
      }));
    }
  }, []);
  const handleDestinationPlaceSelect = useCallback(() => {
    const place = destinationRef.current?.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const placeName =
        place.formatted_address || place.name || "Unknown Place";

      // setDestinationCoords({ lat, lng });
      setFormData((prevData) => ({
        ...prevData,
        dropOffPlace: placeName,
        dropOffLongitude: lng,
        dropOffLatitude: lat,
      }));
    }
  }, []);

  const handleSubmit = () => {
    // console.log(formData);
    navigate("/admin/available-driver", { state: { formData } });
  };
  useEffect(() => {
    const fetchVehicleTypes = async () => {
      const res = await VehicleTypeService.List();
      console.log(res);
      if (!res.error) {
        setVehicleTypeList(res);
      } else {
        console.error(res.error);
      }
    };
    fetchVehicleTypes();
  }, []);

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
                <nav aria-label="breadcrumb" role="navigation">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Vehicle
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="pd-20 card-box mb-30">
            {/* Search User Form */}
              <Form.Group>
                <Form.Label>Search User (by TP)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user TP"
                  value={userData.mobileNo}
                  name="mobileNo"
                  onChange={handleChangeUser}
                />
              </Form.Group>
              <Button variant="primary" onClick={searchUser}>
                Search User
              </Button>

            {/* Display User Info or Error */}
            {error && (
              <Alert variant="danger" className="mt-3">
                {error}
              </Alert>
            )}
            {userData.id && (
              <Alert variant="success" className="mt-3">
                <strong>Found User:</strong> {userData.name} (TP: {userData.mobileNo}
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
                        name="mobileNo"
                        value={userData.mobileNo}
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

              <div className="booking-form">
                 <div className="select-car-wrapper">
                <h2>Selected Vehicle</h2>
                <div className="selected-car">
                  <div className="form-group car-options">
                    {vehicleTypeList.map((item) => (
                      <div
                        className="form-check form-check-inline"
                        key={item.id}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="car-opts"
                          id={`vehicle-${item.id}`} // Unique ID for each input
                          value={item.id}
                          onChange={() =>
                            setFormData((prevData) => ({
                              ...prevData,
                              vehicleTypeId: item.id,
                            }))
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`vehicle-${item.id}`}
                        >
                          <img src={item.image} alt={item.name} />
                        </label>
                        <div className="car-details">
                          <h6>{item.vehicleCount}</h6>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-group destination">
                <label htmlFor="inputFrom">From</label>
                <Autocomplete
                  onLoad={(autoc) => (pickupRef.current = autoc)}
                  onPlaceChanged={handlePickupPlaceSelect}
                >
                  <input
                    type="text"
                    id="inputFrom"
                    className="form-control"
                    placeholder="Select Pickup"
                  />
                </Autocomplete>
              </div>

              <div className="form-group destination">
                <label htmlFor="inputDestination">Where to?</label>
                <Autocomplete
                  onLoad={(autoc) => (destinationRef.current = autoc)}
                  onPlaceChanged={handleDestinationPlaceSelect}
                >
                  <input
                    type="text"
                    id="inputDestination"
                    className="form-control"
                    placeholder="Select Destination"
                  />
                </Autocomplete>
              </div>

             
              <button
                type="submit"
                className="button button-dark"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
