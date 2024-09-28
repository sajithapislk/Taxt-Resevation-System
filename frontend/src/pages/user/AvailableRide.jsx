import Breadcrumb from "./components/Breadcrumb";
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const AvailableRide = () => {
  const drivers = [
    {
      id: 1,
      driverName: 'John Doe',
      vehicleImage: 'https://via.placeholder.com/150', // Replace with your image or URL
      seatCount: 4,
      pricePerKm: 2.5, // price per 1km
    },
    {
      id: 2,
      driverName: 'Jane Smith',
      vehicleImage: 'https://via.placeholder.com/150', // Replace with your image or URL
      seatCount: 6,
      pricePerKm: 3.0,
    },
    // Add more driver entries as needed
  ];

  return (
    <>
      <Breadcrumb title="Let's Ride" path="Ride with Carrgo" />
      <div className="div-padding our-vehicles-div">
        <div className="container">
        <Row>
        {drivers.map((driver) => (
          <Col md={4} sm={6} xs={12} key={driver.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={driver.vehicleImage}
                alt={`${driver.driverName}'s vehicle`}
              />
              <Card.Body>
                <Card.Title>{driver.driverName}</Card.Title>
                <Card.Text>
                  <strong>Seats:</strong> {driver.seatCount} <br />
                  <strong>Price per km:</strong> ${driver.pricePerKm}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleRequestDriver(driver.id)}
                  className="w-100"
                >
                  Request Driver
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
