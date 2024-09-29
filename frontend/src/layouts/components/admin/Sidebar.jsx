import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const Sidebar = ({ sideBarClass, setSideBarClass }) => {
  const toggleSidebar = () => {
    setSideBarClass((prevClass) => (prevClass === "open" ? "" : "open"));
  };

  return (
    <>
      <div className={"left-side-bar " + sideBarClass}>
        <div className="brand-logo">
          <a href="/">
            <img
              src="vendors/images/deskapp-logo.svg"
              alt=""
              className="dark-logo"
            />
            <img
              src="vendors/images/deskapp-logo-white.svg"
              alt=""
              className="light-logo"
            />
          </a>
          <div
            className="close-sidebar"
            data-toggle="left-sidebar-close"
            onClick={toggleSidebar}
          >
            Close
            <i className="ion-close-round"></i>
          </div>
        </div>
        <div className="menu-block customscroll mCustomScrollbar _mCS_3">
          <div
            id="mCSB_3"
            className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
            tabIndex="0"
            style={{ maxHeight: "none" }}
          >
            <div
              id="mCSB_3_container"
              className="mCSB_container"
              style={{ position: "relative", top: "0", left: "0" }}
              dir="ltr"
            >
              <div className="sidebar-menu icon-style-1 icon-list-style-1">
                <ul id="accordion-menu">
                  <li className="dropdown show">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="on"
                    >
                      <span>Admin Dashboard</span>
                    </a>
                    <ul className="submenu" style={{ display: "block" }}>
                      <li>
                        <Link to="/admin/dashboard" className="">
                          DashBoard
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/user" className="">
                          User
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/booking" className="">
                          Booking
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/vehiclecategory" className="">
                          Vehicle Category
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/payment" className="">
                          Payments
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
