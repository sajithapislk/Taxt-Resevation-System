import React, { useState, useEffect, useRef, useCallback } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import VehicleService from "../../../../services/driver/VehicleService";
import VehicleTypeService from "../../../../services/admin/VehicleTypeService";
import {
  GoogleMap,
  useLoadScript,
  Autocomplete,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./AutocompleteStyles.css";
const _googleMapsApiKey =
  import.meta.env.GOOGLE_MAP_API_KEY ||
  "AIzaSyCP6SvRsh7Ba3lOFKEjRxX6dZqkwH6U7H0";
const libraries = ["places"];
function VehicleTabPanel() {
  const userData = localStorage.getItem("driver");
  const user = JSON.parse(userData);
  const [vehicles, setVehicles] = useState([]);
  const [vehicleTypeList, setVehicleTypeList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingVehicleId, setEditingVehicleId] = useState(null);
  const [locationModel, setLocationModel] = useState(false);
  const locationRef = useRef();
  const [newVehicle, setNewVehicle] = useState({
    id: "",
    driverId: "",
    vehicleTypeId: user.id,
    costPerKm: "",
    description: "",
    color: "",
    vehicleNumber: "",
    passengerSeats: "",
    isAcAvailable: "false",
    maxLoad: "",
    image: null,
  });
  useLoadScript({
    googleMapsApiKey: _googleMapsApiKey,
    libraries,
  });
  const [vehicleLocation, setVehicleLocation] = useState({
    vehicleId: "",
    location: "",
    longitude: "",
    latitude: "",
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await VehicleService.List();
      if (!res.error) {
        setVehicles(res);
      } else {
        console.error(res.error);
      }
    };

    const fetchVehicleTypes = async () => {
      const res = await VehicleTypeService.List();
      if (!res.error) {
        setVehicleTypeList(res);
      } else {
        console.error(res.error);
      }
    };

    fetchVehicleTypes();
    fetchVehicles();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVehicle((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewVehicle((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShowModal = (vehicle = null) => {
    if (vehicle) {
      setNewVehicle(vehicle);
      setEditingVehicleId(vehicle.id);
    } else {
      setNewVehicle({
        id: "",
        driverId: user.id,
        vehicleTypeId: "",
        costPerKm: "",
        description: "",
        color: "",
        vehicleNumber: "",
        passengerSeats: "",
        isAcAvailable: "false",
        maxLoad: "",
        image: null,
      });
      setEditingVehicleId(null);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingVehicleId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res;
      if (editingVehicleId) {
        res = await VehicleService.Update(newVehicle);
      } else {
        res = await VehicleService.Store(newVehicle);
      }

      if (!res.error) {
        setVehicles((prevVehicles) =>
          editingVehicleId
            ? prevVehicles.map((veh) =>
                veh.id === editingVehicleId ? res : veh
              )
            : [...prevVehicles, res]
        );
        handleCloseModal();
      } else {
        console.error(res.error);
      }
    } catch (error) {
      console.error("Error updating or creating vehicle:", error);
    }
  };
  const handleLocationModal = (vehicleId) => {
    setLocationModel(true);
    setVehicleLocation((prevData) => ({
      ...prevData,
      vehicleId: vehicleId,
    }));
  };
  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await VehicleService.UpdateLocation(vehicleLocation);
      if (!res.error) {
        setLocationModel(false);
      } else {
        console.error(res.error);
      }
    } catch (error) {
      console.error("Error updating or creating vehicle:", error);
    }
  };

  const handlePickupPlaceSelect = useCallback(() => {
    const place = locationRef.current?.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const placeName =
        place.formatted_address || place.name || "Unknown Place";
      setVehicleLocation((prevData) => ({
        ...prevData,
        location: placeName,
        longitude: lng,
        latitude: lat,
      }));
    }
  }, []);

  const deleteVehicle = async (vehicleId) => {
    console.log(vehicleId);
    try {
      const res = await VehicleService.Delete(vehicleId);
      if (!res.error) {
        setVehicles((prevVehicles) =>
          prevVehicles.filter((veh) => veh.id !== vehicleId)
        );
      } else {
        console.error(res.error);
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };
  return (
    <>
      <div className="vehicles-container">
        <div className="row mb-3">
          <div className="col-lg-6">
            <h4>My Vehicles</h4>
          </div>
          <div className="col-lg-6 text-end">
            <Button variant="primary" onClick={() => handleShowModal()}>
              Add New Vehicle
            </Button>
          </div>
        </div>
        <div className="row">
          {vehicles.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="single-vehicle-container">
                <img src={item.image} alt={`Vehicle ${item.id}`} />
                <p>{item.name}</p>
                <Button
                  variant="secondary"
                  onClick={() => handleShowModal(item)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => deleteVehicle(item.id)}
                  className="mr-2"
                >
                  Delete
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleLocationModal(item.id)}
                  className="mt-2"
                >
                  Update Location
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingVehicleId ? "Edit Vehicle" : "Add New Vehicle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>VEHICLE TYPE</Form.Label>
              <Form.Select
                name="vehicleTypeId"
                value={newVehicle.vehicleTypeId}
                onChange={handleInputChange}
              >
                {vehicleTypeList.map((type) => (
                  <>
                    <option>select type</option>
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  </>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DESCRIPTION</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newVehicle.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>COST PER KM</Form.Label>
              <Form.Control
                type="number"
                name="costPerKm"
                value={newVehicle.costPerKm}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>VEHICLE NUMBER</Form.Label>
              <Form.Control
                type="text"
                name="vehicleNumber"
                value={newVehicle.vehicleNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>COLOR</Form.Label>
              <Form.Select
                name="color"
                value={newVehicle.color}
                onChange={handleInputChange}
              >
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="silver">Silver</option>
                <option value="gray">Gray</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
                <option value="brown">Brown</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>PASSENGER SEATS</Form.Label>
              <Form.Control
                type="number"
                name="passengerSeats"
                value={newVehicle.passengerSeats}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>AC AVAILABLE</Form.Label>
              <Form.Select
                name="isAcAvailable"
                value={newVehicle.isAcAvailable}
                onChange={handleInputChange}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>MAX LOAD</Form.Label>
              <Form.Control
                type="number"
                name="maxLoad"
                value={newVehicle.maxLoad}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="vehicleImage">
              <Form.Label>Vehicle Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              {editingVehicleId ? "Update Vehicle" : "Add Vehicle"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={locationModel} onHide={() => setLocationModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group destination">
            <Autocomplete
              onLoad={(autoc) => (locationRef.current = autoc)}
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
          <Button variant="primary" onClick={handleLocationSubmit}>
            Update Location
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VehicleTabPanel;
