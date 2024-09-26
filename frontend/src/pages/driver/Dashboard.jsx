import Breadcrumb from "./components/Breadcrumb";
import partner from "./../../assets/images/partner-img.webp";
import React, { useEffect, useState } from 'react';
import DashboardTabPanel from "./components/Dashboard/DashboardTabPanel";
import PersonalInfoTabPanel from "./components/Dashboard/PersonalInfoTabPanel";
import VehicleTabPanel from "./components/Dashboard/VehicleTabPanel";
import RidesTabPanel from "./components/Dashboard/RidesTabPanel";
import SettingsTabPanel from "./components/Dashboard/SettingsTabPanel";

function TakeRide() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Create WebSocket connection to your backend
    const ws = new WebSocket("ws://localhost:5070/ws"); // Replace with your actual WebSocket URL

    // When the WebSocket connection opens
    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setIsConnected(true);
    };

    // When a message is received from the WebSocket server
    ws.onmessage = (event) => {
      const newMessage = event.data;
      console.log("Received message:", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Show browser notification
      showNotification(newMessage);
    };

    // When the WebSocket connection is closed
    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
      setIsConnected(false);
    };

    return () => {
      ws.close(); // Clean up WebSocket connection on component unmount
    };
  }, []);

  // Function to show browser notification
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("New WebSocket Message", {
        body: message,
      });
    } else {
      console.log("Notification permission not granted");
    }
  };

  // Request notification permission when the component mounts
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted");
        } else {
          console.log("Notification permission denied");
        }
      });
    }
  }, []);
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
                  <img className="me-3" src={partner} alt="partner-img" />
                  <div className="media-body">
                    <h2 className="mt-0">Johnson Smith</h2>
                    <p>ID 1234567890</p>
                    <a href="#">Edit Profile</a>
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
                    role="presentation"
                    className={activeTab === "dashboard" ? "active" : ""}
                  >
                    <a
                      href="#dashboard"
                      aria-controls="dashboard"
                      role="tab"
                      onClick={() => handleTabClick("dashboard")}
                    >
                      Dashboard
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
                  <li
                    role="presentation"
                    className={activeTab === "settings" ? "active" : ""}
                  >
                    <a
                      href="#settings"
                      aria-controls="settings"
                      role="tab"
                      onClick={() => handleTabClick("settings")}
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {activeTab === "dashboard" && (
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="dashboard"
                    >
                      <DashboardTabPanel />
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
