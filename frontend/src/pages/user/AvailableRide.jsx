import Breadcrumb from "./components/Breadcrumb";
import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Modal,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import VehicleService from "../../services/user/VehicleService";
import BookingService from "../../services/user/BookingService";
import { useNavigate } from "react-router-dom";

const AvailableRide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};
  const [vehicleList, setVehicleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [combinedFormData, setCombinedFormData] = useState({
    ...formData,
    vehicleId: null,
  });

  useEffect(() => {
    const fetchAvailableDriver = async () => {
      const data = {
        radiusInKm: 3,
        longitude: formData.pickUpLongitude,
        latitude: formData.pickUpLatitude,
        vehicleTypeId: formData.vehicleTypeId,
      };
      const res = await VehicleService.AvailableList(data);
      if (!res.error) {
        setVehicleList(res);
      }
    };

    fetchAvailableDriver();
  }, []);

  const handleSubmit = (vehicleId) => {
    setLoading(true);

    // Update the state and then perform the request with the updated state value
    setCombinedFormData((prevData) => {
      const updatedData = { ...prevData, vehicleId: vehicleId };

      // Use the updated data here
      BookingService.Request(updatedData)
        .then((res) => {
          // Handle successful booking request
          if (!res.error) {
            setModalMessage("Booking request was successful!");
            setShowModal(true);
          } else {
            setErrorMessage(`Error: ${res.error}`);
          }
        })
        .catch((error) => {
          // Handle error in booking request
          setErrorMessage(`Error: ${error.message}`);
        })
        .finally(() => {
          setLoading(false);
        });

      return updatedData;
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/user/history");
  };

  return (
    <>
      <Breadcrumb title="Available Drivers" path="Available Drivers" />
      <div className="div-padding our-vehicles-div">
        <div className="container">
          {/* Display error message if exists */}
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage("")}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          <Row>
            {vehicleList.length > 0 ? (
              vehicleList.map((item) => (
                <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={`${item.driver.name}'s vehicle`}
                    />
                    <Card.Body>
                      <Card.Title>{item.description}</Card.Title>
                      <Card.Text>
                        <strong>Driver:</strong> {item.driver.name} <br />
                        <strong>Seats:</strong> {item.passengerSeats} <br />
                        <strong>Vehicle NO:</strong> {item.vehicleNumber} <br />
                        <strong>Distance from current location:</strong>{" "}
                        {item.distance.toFixed(2)}km
                        <br />
                        <strong>Price per km:</strong> LKR
                        {item.costPerKm.toFixed(2)}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => handleSubmit(item.id)}
                        className="w-100"
                      >
                        Request for a Ride
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Alert variant="info">No vehicles found.</Alert>
            )}
          </Row>
          {/* Bootstrap Modal */}
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Booking Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{modalMessage}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleModalClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AvailableRide;
