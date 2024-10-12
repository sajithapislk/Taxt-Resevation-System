import React, { useEffect, useState } from "react";
import VehicleService from "../../services/admin/VehicleService";
import { Modal, Button, Form } from "react-bootstrap";
import VehicleTypeService from "../../services/admin/VehicleTypeService";

const Vehicle = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState("create");

  const [vehicleData, setVehicleData] = useState({
    id: null,
    driverId: null,
    vehicleTypeId: null,
    vehicleNumber: null,
    passengerSeats: null,
    costPerKm: null,
    color: null,
    isAcAvailable: null,
    description: null,
    maxLoad: null,
    image: null,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const fetchVehicle = async () => {
        try {
            const res = await VehicleService.List();
            console.log('Vehicles fetched:', res);

            if (res && Array.isArray(res)) {
                setVehicleList(res);
            } else {
                console.error('Unexpected response format:', res);
            }
        } catch (error) {
            console.error('Error fetching vehicle list:', error);
        }
    };

    fetchVehicle();
}, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVehicleData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    console.log("submit");
    event.preventDefault();

    try {
      if (formType === "update") {
        const response = await VehicleService.Update(vehicleData);
        console.log("Vehicle saved successfully:", response.data);
      } else {
        console.log(formType);
        const response = await VehicleService.Delete(vehicleData);
        console.log("Vehicle saved successfully:", response.data);
      }
    } catch (error) {
      console.error("Error saving the vehicle:", error);
    }
  };

  const updateClick = (data, isDelete = false) => {
    setVehicleData({
      id: data.id,
      driverId: data.driverId,
      vehicleTypeId: data.vehicleTypeId,
      vehicleNumber: data.vehicleNumber,
      passengerSeats: data.passengerSeats,
      costPerKm: data.costPerKm,
      color: data.color,
      isAcAvailable: data.isAcAvailable,
      description: data.description,
      maxLoad: data.maxLoad,
      image: data.image,
    });
    setFormType(isDelete ? "delete" : "update");
    openModal();
  };
  return (
    <div class="main-container">
      <div class="pd-ltr-20 xs-pd-20-10">
        <div class="min-height-200px">
          <div class="page-header">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="title">
                  <h4>Vehicle</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Vehicle
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="col-md-6 col-sm-12 text-right"></div>
            </div>
          </div>
          <div class="pd-20 card-box mb-30">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Vehicle Number</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {vehicleList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.vehicleNumber}</td>
                    <td>{item.description}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="mr-2"
                        onClick={() => updateClick(item)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => updateClick(item, true)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={isOpen && formType==='update'} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="vehicleId">
              <Form.Label>Vehicle ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={vehicleData.id}
                onChange={handleChange}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="driverId">
              <Form.Label>Driver ID</Form.Label>
              <Form.Control
                type="text"
                name="driverId"
                value={vehicleData.driverId}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="vehicleTypeId">
              <Form.Label>Vehicle Type ID</Form.Label>
              <Form.Control
                type="text"
                name="vehicleTypeId"
                value={vehicleData.vehicleTypeId}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="vehicleNumber">
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control
                type="text"
                name="vehicleNumber"
                value={vehicleData.vehicleNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="passengerSeats">
              <Form.Label>Passenger Seats</Form.Label>
              <Form.Control
                type="number"
                name="passengerSeats"
                value={vehicleData.passengerSeats}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="costPerKm">
              <Form.Label>Cost Per Km</Form.Label>
              <Form.Control
                type="number"
                name="costPerKm"
                value={vehicleData.costPerKm}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={vehicleData.color}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="isAcAvailable">
              <Form.Check
                type="checkbox"
                label="AC Available"
                name="isAcAvailable"
                checked={vehicleData.isAcAvailable}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={vehicleData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="maxLoad">
              <Form.Label>Max Load</Form.Label>
              <Form.Control
                type="number"
                name="maxLoad"
                value={vehicleData.maxLoad}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={vehicleData.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>Close</Button>
              <Button variant="primary" type="submit" onClick={handleSubmit}>Save changes</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {isOpen && formType === "delete" && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myLargeModalLabel">
                  Large modal
                </h4>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSubmit}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicle;
