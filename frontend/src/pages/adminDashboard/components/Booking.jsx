import React from 'react'
import { Table } from 'react-bootstrap';

const Booking = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <h3>Bookings</h3>
      <Table className='' striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Booking ID</th>
            <th>User</th>
            <th>Vehicle Category</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>#B12345</td>
            <td>Saheer</td>
            <td>Car</td>
            <td>2024-09-20</td>
            <td>Confirmed</td>
          </tr>
          <tr>
            <td>2</td>
            <td>#B12346</td>
            <td>Salam</td>
            <td>Van</td>
            <td>2024-09-21</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Booking