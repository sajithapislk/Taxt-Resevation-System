import React, { useState } from "react";

const Vehicletype = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [userData, setUserData] = useState({
    id: "",
    name: "",
    image: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          image: reader.result
      }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.DriverLogin(userData);
      console.log('Vehicle saved successfully:', response.data);
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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Saheer</td>
                  <td>img</td>
                </tr>
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
                <form onSubmit={handleSubmit}>
                  <div class="form-group row">
                    <label class="col-sm-12 col-md-2 col-form-label">
                      Name
                    </label>
                    <div class="col-sm-12 col-md-10">
                      <input
                        name="name"
                        class="form-control"
                        type="text"
                        placeholder="Johnny Brown"
                        onChange={
                          (e) => setUserData(
                            (prevData) => ({
                              ...prevData,
                              name:e.target.value
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-12 col-md-2 col-form-label">
                      File
                    </label>
                    <div class="col-sm-12 col-md-10">
                      <input name="file" class="form-control" type="file" onChange={handleFileChange}  />
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
                    <button type="submit" className="btn btn-primary">
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

export default Vehicletype;
