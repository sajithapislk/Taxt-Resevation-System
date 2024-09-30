import Breadcrumb from "./components/Breadcrumb";
import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import VehicleService from "../../services/user/VehicleService";

const AvailableRide = () => {
  const location = useLocation();
  const { formData } = location.state || {};
  const [vehicleList, setVehicleList] = useState([]);

  const [combinedFormData, setCombinedFormData] = useState({
    ...formData,
    vehicleId: "",
  });

  useEffect(() => {
    const fetchAvailableDriver = async () => {
      const data = {
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
  
  console.log(combinedFormData);
  return (
    <>
      <Breadcrumb title="Available Drivers" path="Available Drivers" />
      <div className="div-padding our-vehicles-div">
        <div className="container">
          <Row>
            {vehicleList.map((item) => (
              <Col md={4} sm={6} xs={12} key={driver.id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.vehicleImage}
                    alt={`${driver.driverName}'s vehicle`}
                  />
                  <Card.Body>
                    <Card.Title>{driver.driverName}</Card.Title>
                    <Card.Text>
                      <strong>Seats:</strong> {driver.seatCount} <br />
                      <strong>Vehicle NO:</strong> {driver.vehicleNo} <br />
                      <strong>Distance from current location:</strong> 1KM{" "}
                      <br />
                      <strong>Price per km:</strong> ${driver.pricePerKm}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleRequestDriver(item.id)}
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
