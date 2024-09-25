import React from 'react'
import { Table } from 'react-bootstrap';

const VehicleCategory = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <h3>Vehicle Categories</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>SUV</td>
            <td>Sport Utility Vehicle</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sedan</td>
            <td>Comfortable for 4 passengers</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default VehicleCategory