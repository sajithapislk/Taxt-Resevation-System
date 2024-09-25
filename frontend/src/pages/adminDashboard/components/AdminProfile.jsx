import React from 'react'

function AdminProfile()  {
  return (
    <div className="container mt-5">
    <h2>Admin Profile</h2>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Name: John Doe</h5>
        <p className="card-text">Email: admin@example.com</p>
        <p className="card-text">Role: Administrator</p>
      </div>
    </div>
  </div>
  );
}

export default AdminProfile