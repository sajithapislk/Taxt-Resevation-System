import React, { useState } from 'react';

const Header = ({ onMenuClick }) => {
  
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
          <div className="dropdown show">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <span className="user-icon">
                <img src="vendors/images/photo1.jpg" alt="" />
              </span>
              <span className="user-name">Ross C. Lopez</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
              <a className="dropdown-item" href="login.html">
                <i className="dw dw-logout"></i> Log Out
              </a>
            </div>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/dropways/deskapp" target="_blank">
            <img src="vendors/images/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
