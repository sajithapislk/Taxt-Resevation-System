import React, { useState } from "react";
import { Button } from "react-bootstrap";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

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
            {/* <div class="clearfix mb-20">
              <div class="pull-left">
                <h4 class="text-blue h4">Striped table</h4>
                <p>
                  Add <code>.table .table-striped</code> to add zebra-striping
                  to any table row within the <code>&lt;tbody&gt;</code>.
                </p>
              </div>
              <div class="pull-right">
                <a
                  href="#striped-table"
                  class="btn btn-primary btn-sm scroll-click"
                  rel="content-y"
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                >
                  <i class="fa fa-code"></i> Source Code
                </a>
              </div>
            </div> */}
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#101</td>
                  <td>Saheer</td>
                  <td>saheer@gmail.com</td>
                  <td>+123456789</td>
                  <td>
                    <Button variant="info" size="sm" className="mr-2">
                      View
                    </Button>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="footer-wrap pd-20 mb-20 card-box">
          DeskApp - Bootstrap 4 Admin Template By
          <a href="https://github.com/dropways" target="_blank">
            Ankit Hingarajiya
          </a>
        </div>
      </div>
      {/* Modal */}
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
                <form>
                  <div class="select-role">
                    <div
                      class="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label class="btn">
                        <input type="radio" name="options" id="admin" />
                        <div class="icon">
                          <img
                            src="vendors/images/briefcase.svg"
                            class="svg"
                            alt=""
                          />
                        </div>
                        <span>I'm</span>
                        Manager
                      </label>
                      <label class="btn">
                        <input type="radio" name="options" id="user" />
                        <div class="icon">
                          <img
                            src="vendors/images/person.svg"
                            class="svg"
                            alt=""
                          />
                        </div>
                        <span>I'm</span>
                        Employee
                      </label>
                    </div>
                  </div>
                  <div class="input-group custom">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Username"
                    />
                    <div class="input-group-append custom">
                      <span class="input-group-text">
                        <i class="icon-copy dw dw-user1"></i>
                      </span>
                    </div>
                  </div>
                  <div class="input-group custom">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="**********"
                    />
                    <div class="input-group-append custom">
                      <span class="input-group-text">
                        <i class="dw dw-padlock1"></i>
                      </span>
                    </div>
                  </div>
                  <div class="row pb-30">
                    <div class="col-6">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck1"
                        />
                        <label class="custom-control-label" htmlFor="customCheck1">
                          Remember
                        </label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="forgot-password">
                        <a href="forgot-password.html">Forgot Password</a>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
