import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Taxi Admin</div>
      <div className="list-group list-group-flush">
        <Link to="/admin" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
        <Link to="/users" className="list-group-item list-group-item-action bg-light">Users</Link>
        <Link to="/trips" className="list-group-item list-group-item-action bg-light">Trips</Link>
        <Link to="/payments" className="list-group-item list-group-item-action bg-light">Payments</Link>
      </div>
    </div>
  );
}

export default Sidebar;
