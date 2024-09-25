import React from 'react'
import { StatsCard } from './StatsCard'
import { Table } from 'react-bootstrap'; // Import Bootstrap Table



function Dashboard(){
  return (
    <div className="container-fluid">
      <div className="row">
        <StatsCard title="Total Trips" value="1500"/>
        <StatsCard title="ActiveDrivers" value="200" />
        <StatsCard title="Active Users" value="500"/>
      </div>

      <div className="row mt-4">
        <div className="col">
          <h3>Recent Trips</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Trip ID</th>
                <th>Driver</th>
                <th>User</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#12345</td>
                <td>Saheer</td>
                <td>Sajith</td>
                <td>Completed</td>
                <td>2024-09-20</td>
              </tr>
              <tr>
                <td>#12346</td>
                <td>Salam</td>
                <td>Nifras</td>
                <td>Ongoing</td>
                <td>2024-09-21</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;
