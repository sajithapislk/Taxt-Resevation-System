import React, { useState, useEffect } from "react";
import VehicleTypeService from "./../../services/admin/VehicleTypeService";
import { Button } from "react-bootstrap";

const Vehicletype = () => {
  const [vehicleTypeList, setVehicleTypeList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState("create");

  const [typeData, setTypeData] = useState({
    id: "",
    name: "",
    image: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      const res = await VehicleTypeService.List();
      console.log(res);
      if (!res.error) {
        setVehicleTypeList(res);
      } else {
        console.error(res.error);
      }
    };

    fetchVehicleTypes();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTypeData((prevData) => ({
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
      if (formType === "create") {
        const response = await VehicleTypeService.Create(typeData);
        console.log("Vehicle saved successfully:", response.data);
      } else if (formType === "update") {
        const response = await VehicleTypeService.Update(typeData);
        console.log("Vehicle saved successfully:", response.data);
      }else{
        console.log(formType);
        const response = await VehicleTypeService.Delete(typeData);
        console.log("Vehicle saved successfully:", response.data);
      }
    } catch (error) {
      console.error("Error saving the vehicle:", error);
    }
  };

  const updateClick = (data,isDelete = false) => {
    setTypeData({
      id: data.id,
      name: data.name,
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {vehicleTypeList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.image}
                        className="img-thumbnail"
                        width="10%"
                      />
                    </td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="mr-2"
                        onClick={() => updateClick(item)}
                      >
                        Update
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
      {isOpen && (formType !== "delete") && (
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
                        onChange={(e) =>
                          setTypeData((prevData) => ({
                            ...prevData,
                            name: e.target.value,
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
                      <input
                        name="file"
                        class="form-control"
                        type="file"
                        onChange={handleFileChange}
                      />
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

export default Vehicletype;
