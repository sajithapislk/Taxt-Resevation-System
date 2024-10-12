import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import VehicleService from "../../services/VehicleService";

const Vehicle = () => {
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    const fetchAvailableDriver = async () => {
      const res = await VehicleService.List();
      console.log(res);
      if (!res.error) {
        setVehicleList(res);
      } else {
        console.error(res.error);
      }
    };

    fetchAvailableDriver();
  }, []);


  return (
    <>
      <div className="div-padding our-vehicles-div">
        <div className="container">
          <Row>
            {vehicleList.length > 0 &&
              vehicleList.map((item) => (
                <Col
                  md={4}
                  sm={6}
                  xs={12}
                  key={item.id}
                  className="mb-4"
                  onClick={() => handleSubmit(item.id)}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={item.image}
                    />
                    <Card.Body>
                      <Card.Title>info</Card.Title>
                      <Card.Text>
                        <strong>Seats:</strong> {item.passengerSeats} <br />
                        <strong>Vehicle NO:</strong> {item.vehicleNumber} <br />
                        <strong>Price per km:</strong> LKR{item.costPerKm}
                      </Card.Text>
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

export default Vehicle;
