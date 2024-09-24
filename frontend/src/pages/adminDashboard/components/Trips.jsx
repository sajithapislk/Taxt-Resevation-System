import React from 'react';
import { Table,Button } from 'react-bootstrap'; // Import Bootstrap Table

const Trips = () => {
  return (
    <div className="container-fluid mt-4">
      <h3 className="mb-4">Manage Trips</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Trip ID</th>
            <th>Driver</th>
            <th>User</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>Saheer Driver</td>
            <td>Sajith User</td>
            <td>Completed</td>
            <td>2024-09-20</td>
            <td>
              <Button variant="info" size="sm">View</Button>
            </td>
          </tr>
          <tr>
            <td>#12346</td>
            <td>Salam Driver</td>
            <td>Nifras User</td>
            <td>Ongoing</td>
            <td>2024-09-21</td>
            <td>
              <Button variant="info" size="sm">View</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Trips;
