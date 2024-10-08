import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UserService from "../../services/admin/UserService";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await UserService.List();
      console.log(res);
      if (!res.error) {
        setUserList(res);
      } else {
        console.error(res.error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (id) => {
    try {
      const response = await UserService.Delete(id);
      console.log("Vehicle saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving the vehicle:", error);
    }
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
              <div class="col-md-6 col-sm-12 text-right">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={openModal}
                >
                  Create
                </button>
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
                    <td>{item.Id}</td>
                    <td>{item.Email}</td>
                    <td>{item.Name}</td>
                    <td>{item.MobileNo}</td>
                    <td>{item.Image}</td>
                    <td>{item.DateOfBirth}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Status}</td>
                    <td>
                      <Button variant="info" size="sm" className="mr-2">
                        View
                      </Button>
                      <Button variant="danger" size="sm">
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
      {isOpen && (
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
                    onClick={()=>handleSubmit(id)}
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

export default User;
