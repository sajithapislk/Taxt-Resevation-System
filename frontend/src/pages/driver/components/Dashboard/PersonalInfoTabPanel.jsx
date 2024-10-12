import React, { useState, useEffect } from "react";
import UserService from "../../../../services/driver/UserService";

function TabPanel2() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    website: "",
    birthday: "",
    phoneNumber: "",
    gender: "",
    status: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await UserService.Info();
      setUserData((prev) => ({
        ...prev,
        id: response.id,
        name: response.name,
        email: response.email,
        website: response.website,
        birthday: response.birthday,
        phoneNumber: response.phoneNumber,
        gender: response.gender,
        status: response.status,
        description: response.description,
      }));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await UserService.Update(userData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="personal-info small-div">
      <div className="div-heading">
        <h4 className="heading-item heading-item-1">Personal Information</h4>
        <p className="heading-item heading-item-2 right">
          {isEditing ? (
            <a href="#" className="save-btn" onClick={handleSave}>
              <i className="fas fa-save"></i> Save
            </a>
          ) : (
            <a href="#" className="edit-btn" onClick={handleEdit}>
              <i className="fas fa-edit"></i> Edit
            </a>
          )}
        </p>
      </div>
      <div className="personal-details small-div-item">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="website">Your Website</label>
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={userData.website}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="birthday">Your Birthday</label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                name="birthday"
                value={userData.birthday}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="phoneNumber">Your Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="gender">Your Gender</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="">Select a gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                className="form-control"
                id="status"
                name="status"
                value={userData.status}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="">Select a status</option>
                <option value="1">Single</option>
                <option value="2">Married</option>
                <option value="3">Divorced</option>
                <option value="4">Widowed</option>
                <option value="5">Separated</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="description">
                Write a little description about you
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={userData.description}
                onChange={handleInputChange}
                readOnly={!isEditing}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabPanel2;
