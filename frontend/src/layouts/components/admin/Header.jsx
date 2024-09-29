import React, { useState } from 'react';

const Header = ({ onMenuClick }) => {
  const [dropdownClass, setDropdownClass] = useState("");
  const toggleDropdown = () => {
    setDropdownClass((prevClass) => (prevClass === "show" ? "" : "show"));
  };
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon bi bi-list" onClick={onMenuClick}></div>
        <div
          className="search-toggle-icon bi bi-search"
          data-toggle="header_search"
        ></div>
      </div>
      <div className="header-right">
       
        <div className="user-info-dropdown">
          <div className={"dropdown " + dropdownClass}>
            <a
              onClick={toggleDropdown}
              className="dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <span className="user-icon">
                <img src="vendors/images/photo1.jpg" alt="" />
              </span>
              <span className="user-name">Admin</span>
            </a>
            <div className={"dropdown-menu dropdown-menu-right dropdown-menu-icon-list " + dropdownClass}>
              <a className="dropdown-item" href="login.html">
                <i className="dw dw-logout"></i> Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
