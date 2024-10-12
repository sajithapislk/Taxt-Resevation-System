import Breadcrumb from "./components/Breadcrumb";
import partner from "./../../assets/images/partner-img.webp";
import React, { useEffect, useState } from 'react';
import PersonalInfoTabPanel from "./components/Dashboard/PersonalInfoTabPanel";
import VehicleTabPanel from "./components/Dashboard/VehicleTabPanel";
import RidesTabPanel from "./components/Dashboard/RidesTabPanel";
import SettingsTabPanel from "./components/Dashboard/SettingsTabPanel";
import BookingRequestTabPanel from "./components/Dashboard/BookingRequestTabPanel";
import ContinueRideTabPanel from "./components/Dashboard/ContinueRideTabPanel";

function TakeRide() {
  const userData = localStorage.getItem("driver");
  const user = JSON.parse(userData);
  const [activeTab, setActiveTab] = useState("request");
   
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Breadcrumb title="Let's Ride" path="Ride with Carrgo" />
      <div className="div-padding driver-dashboard-div">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="passanger-name">
                <div className="media">
                  <img className="me-3" width="100px" src={user.image || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"} alt="partner-img" />
                  <div className="media-body">
                    <h2 className="mt-0">{user.name}</h2>
                    <p>{user.id}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 right-text">
              <h2>Partnership with CarrGo</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-dashboard">
                <ul className="nav nav-tabs tab-navigation" role="tablist">
                  <li
                    role="continue-ride"
                    className={activeTab === "continue-ride" ? "active" : ""}
                  >
                    <a
                      href="#continue-ride"
                      aria-controls="continue-ride"
                      role="tab"
                      onClick={() => handleTabClick("continue-ride")}
                    >
                      Continue Ride
                    </a>
                  </li>
                  <li
                    role="request"
                    className={activeTab === "request" ? "active" : ""}
                  >
                    <a
                      href="#request"
                      aria-controls="request"
                      role="tab"
                      onClick={() => handleTabClick("request")}
                    >
                      Request
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={activeTab === "info" ? "active" : ""}
                  >
                    <a
                      href="#info"
                      aria-controls="info"
                      role="tab"
                      onClick={() => handleTabClick("info")}
                    >
                      Personal Information
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={activeTab === "vehicles" ? "active" : ""}
                  >
                    <a
                      href="#vehicles"
                      aria-controls="vehicles"
                      role="tab"
                      onClick={() => handleTabClick("vehicles")}
                    >
                      Vehicles
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={activeTab === "rides" ? "active" : ""}
                  >
                    <a
                      href="#rides"
                      aria-controls="rides"
                      role="tab"
                      onClick={() => handleTabClick("rides")}
                    >
                      Rides
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {activeTab === "continue-ride" && (
                    <div
                      role="continue-ride"
                      className="tab-pane active"
                      id="dashboard"
                    >
                      <ContinueRideTabPanel />
                    </div>
                  )}
                  {activeTab === "request" && (
                    <div role="tabpanel" className="tab-pane active" id="request">
                      <BookingRequestTabPanel />
                    </div>
                  )}
                  {activeTab === "info" && (
                    <div role="tabpanel" className="tab-pane active" id="info">
                      <PersonalInfoTabPanel />
                    </div>
                  )}
                  {activeTab === "vehicles" && (
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="vehicles"
                    >
                      <VehicleTabPanel />
                    </div>
                  )}
                  {activeTab === "rides" && (
                    <div role="tabpanel" className="tab-pane active" id="rides">
                      <RidesTabPanel />
                    </div>
                  )}
                  {activeTab === "settings" && (
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="settings"
                    >
                      <SettingsTabPanel />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TakeRide;
