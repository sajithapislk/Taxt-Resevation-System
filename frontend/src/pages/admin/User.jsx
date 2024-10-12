import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import UserService from "../../services/admin/UserService";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [userList, setUserList] = useState([]);
  const [formType, setFormType] = useState("create");
  const [userData, setUserData] = useState({
    id: null,
    name: null,
    mobileNo: null,
    image: null,
    website: null,
    dateOfBirth: null,
    gender: null,
    status: null,
    description: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const res = await UserService.List();
            console.log('User response:', res);

            if (res && Array.isArray(res)) {
                setUserList(res);
            } else {
                console.error('Unexpected response format:', res);
            }
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    fetchUser();
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formType === "update") {
        const response = await UserService.Update(userData);
        window.location.reload();
        console.log("Vehicle saved successfully:", response.data);
      } else {
        console.log(formType);
        const response = await UserService.Delete(userData);
        window.location.reload();
        console.log("Vehicle saved successfully:", response.data);
      }
    } catch (error) {
      console.error("Error saving the vehicle:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateClick = (data, isDelete = false) => {
    setUserData({
      id: data.id,
      name: data.name,
      mobileNo: data.mobileNo,
      image: data.image,
      website: data.website,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      status: data.status,
      description: data.description,
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
                  <h4>User</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      User
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="pd-20 card-box mb-30">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>MobileNo</th>
                  <th>Image</th>
                  <th>DateOfBirth</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((item) => (
                  <tr key={item.Id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.mobileNo}</td>
                    <td>{item.image}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.gender}</td>
                    <td>{item.status}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="mr-2"
                        onClick={() => updateClick(item)}
                      >
                        View
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => updateClick(item,true)}>
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
      <Modal show={isOpen && formType === "update"} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Information Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobileNo">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="mobileNo"
                value={userData.mobileNo}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={userData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={userData.website}
                onChange={handleChange}
                placeholder="Enter your website"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                name="gender"
                value={userData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={userData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={userData.description}
                onChange={handleChange}
                placeholder="Enter a brief description"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
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
                    <button type="button" className="btn btn-danger" onClick={handleSubmit}>
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

export default User;
