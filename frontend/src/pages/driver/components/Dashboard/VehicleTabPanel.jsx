import ourVehicles21 from "./../../../../assets/images/21_our_vehicles.webp";
import ourVehicles22 from "./../../../../assets/images/22_our_vehicles.webp";
import ourVehicles23 from "./../../../../assets/images/23_our_vehicles.webp";
import vehicle1 from "./../../../../assets/images/dashboard/vehicle-1.webp";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
function TabPanel4() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="vahicles-container">
        <div className="row">
          <div className="col-lg-6">
            <h4>My vehicles</h4>
          </div>
          <div className="col-lg-6 text-end">
            <Button variant="primary" onClick={handleShow}>
              Register New Vehicle
            </Button>
            {/* <a href="#" className="button button-dark">
              Register New Vehicle
            </a> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={vehicle1} alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={ourVehicles21} alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={ourVehicles22} alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={ourVehicles23} alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src="assets/images/dashboard/vehicle-1.webp" alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={ourVehicles21} alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={ourVehicles22} alt="Vehicle" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-vehicle-container">
              <img src={ourVehicles23} alt="Vehicle" />
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default TabPanel4;
