import React from 'react';
import { Table,Button } from 'react-bootstrap'; // Import the Table component from Bootstrap

const Payments = () => {
  return (
    <div className="container-fluid mt-4">
    <h3 className="mb-4">Manage Payments</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Payment ID</th>
          <th>User</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>#98765</td>
          <td>Jane User</td>
          <td>$45.00</td>
          <td>Completed</td>
          <td>2024-09-20</td>
          <td>
            <Button variant="info" size="sm">View</Button>
          </td>
        </tr>
        <tr>
          <td>#98766</td>
          <td>John User</td>
          <td>$75.00</td>
          <td>Pending</td>
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

export default Payments;
