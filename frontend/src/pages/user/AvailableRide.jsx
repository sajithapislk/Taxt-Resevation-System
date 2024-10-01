import Breadcrumb from "./components/Breadcrumb";
import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import VehicleService from "../../services/user/VehicleService";
import BookingService from "../../services/user/BookingService";

const AvailableRide = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const [vehicleList, setVehicleList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [combinedFormData, setCombinedFormData] = useState({
    ...formData,
    vehicleId: "",
  });

  useEffect(() => {
    const fetchAvailableDriver = async () => {
      const data = {
        "radiusInKm" : 100,
        "longitude": formData.pickUpLongitude,
        "latitude": formData.pickUpLatitude,
        "vehicleTypeId": formData.vehicleTypeId,
      }
      const res = await VehicleService.AvailableList(data);
      console.log(res);
      if (!res.error) {
        setVehicleList(res);
      } else {
        console.error(res.error);
      }
    };

    fetchAvailableDriver();
  }, []);

  const handleSubmit = (vehicleId) => {
    console.log(vehicleId);
    setLoading(true);
    setCombinedFormData((prevData) => ({
      ...prevData,
      vehicleId: vehicleId,
    }));
    const res = BookingService.Request(combinedFormData);
    if (!res.error) {
      
    } else {
      console.error(res.error);
    }
  };

  return (
    <>
      <Breadcrumb title="Available Drivers" path="Available Drivers" />
      <div className="div-padding our-vehicles-div">
        <div className="container">
          <Row>
            {vehicleList.map((item) => (
              <Col md={4} sm={6} xs={12} key={item.id} className="mb-4" onClick={()=>handleSubmit(item.id)}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={`${item.driver.name}'s vehicle`}
                  />
                  <Card.Body>
                    <Card.Title>{item.driver.name}</Card.Title>
                    <Card.Text>
                      <strong>Seats:</strong> {item.passengerSeats} <br />
                      <strong>Vehicle NO:</strong> {item.vehicleNumber} <br />
                      <strong>Distance from current location:</strong> 1KM{item.distance}
                      <br />
                      <strong>Price per km:</strong> ${item.costPerKm}
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
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default AvailableRide;
