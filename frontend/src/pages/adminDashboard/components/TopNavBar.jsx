import React from 'react'

function TopNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Admin Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Settings</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default TopNavBar;
