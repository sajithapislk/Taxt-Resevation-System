import VehicleService from "../../../../services/driver/VehicleService";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function VehicleTabPanel() {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    driverId: '',
    vehicle_type_id: '',
    cost_per_km: '',
    description: '',
    color: '',
    vehicle_number: '',
    passenger_seat: '',
    is_available_ac: 'false',
    max_load: '',
    image: null,
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await VehicleService.Create(newVehicle);
      if (!res.error) {
        setVehicles((prevVehicles) => [...prevVehicles, res]);
        setNewVehicle({ name: "", image: null });
        setShowModal(false);
      } else {
        console.error(res.error);
      }
    } catch (error) {
      console.error("Error creating vehicle:", error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="vehicles-container">
        <div className="row mb-3">
          <div className="col-lg-6">
            <h4>My Vehicles</h4>
          </div>
          <div className="col-lg-6 text-end">
            <Button variant="primary" onClick={handleShowModal}>
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {Object.keys(newVehicle).map(
              (key) =>
                key !== "image" && key !== "driverId" &&  (
                  <Form.Group key={key} className="mb-3">
                    <Form.Label>
                      {key.replace(/_/g, " ").toUpperCase()}
                    </Form.Label>
                    {key === "description" ? (
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name={key}
                        value={newVehicle[key]}
                        onChange={handleInputChange}
                      />
                    ) : key === "is_available_ac" ? (
                      <Form.Select
                        name={key}
                        value={newVehicle[key]}
                        onChange={handleInputChange}
                      >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </Form.Select>
                    ) : (
                      <Form.Control
                        type={
                          [
                            "cost_per_km",
                            "max_load",
                            "passenger_seat",
                            "driver_id",
                            "vehicle_type_id",
                          ].includes(key)
                            ? "number"
                            : "text"
                        }
                        name={key}
                        value={newVehicle[key]}
                        onChange={handleInputChange}
                      />
                    )}
                  </Form.Group>
                )
            )}
            <Form.Group className="mb-3" controlId="vehicleImage">
              <Form.Label>Vehicle Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Vehicle
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VehicleTabPanel;
