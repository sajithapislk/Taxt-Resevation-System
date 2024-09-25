import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation

function TopNavBar() {
  return (
   <div className='mb-3 '>
     <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
     <Link className="btn btn-primary" id="menu-toggle" to="/admin/dashboard">Toggle Menu</Link>
     

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
          <Link className="nav-link" to="/admin/profile">Admin Profile</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/admin/setting">Settings</Link>
          </li>
        </ul>
      </div> 
    </nav>
   </div>
  )
}
export default TopNavBar;
