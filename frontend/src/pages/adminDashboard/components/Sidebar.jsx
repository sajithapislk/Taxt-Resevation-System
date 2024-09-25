import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Taxi Admin</div>
      <div className="list-group list-group-flush">
        <Link to="/admin/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
        <Link to="/admin/users" className="list-group-item list-group-item-action bg-light">Users</Link>
        <Link to="/admin/trips" className="list-group-item list-group-item-action bg-light">Trips</Link>
        <Link to="/admin/payments" className="list-group-item list-group-item-action bg-light">Payments</Link>
        <Link to="/admin/vehicle" className="list-group-item list-group-item-action bg-light">Vehicle</Link>
        <Link to="/admin/booking" className="list-group-item list-group-item-action bg-light">Booking</Link>


      </div>
    </div>
  );
}

export default Sidebar;
