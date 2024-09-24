import React from 'react'
import { Table,Button } from 'react-bootstrap'; // Import Bootstrap Table

function Users() {
  return (
    <div className="container-fluid mt-4">
      <h3 className="mb-4">Manage Users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#101</td>
            <td>Saheer</td>
            <td>saheer@gmail.com</td>
            <td>+123456789</td>
            <td>
              <Button variant="info" size="sm" className="mr-2">View</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default Users;
