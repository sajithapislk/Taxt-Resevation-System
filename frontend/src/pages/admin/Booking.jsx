import React, { useEffect, useState } from "react";
import BookingService from "../../services/admin/BookingService";

const Booking = () => {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const res = await BookingService.List();
            console.log('Booking response:', res);

            if (res && Array.isArray(res)) {
                setBookingList(res);
            } else {
                console.error('Unexpected response format:', res);
            }
        } catch (error) {
            console.error('Error fetching booking list:', error);
        }
    };

    fetchUser();
}, []);

  return (
    <div class="main-container">
      <div class="pd-ltr-20 xs-pd-20-10">
        <div class="min-height-200px">
          <div class="page-header">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="title">
                  <h4>Books</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Books
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="pd-20 card-box mb-30">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Booking ID</th>
                  <th>Type</th>
                  <th>User</th>
                  <th>Duration</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookingList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.userId}</td>
                    <td>{item.duration}</td>
                    <td>{item.distance}KM</td>
                    <td>{item.price}</td>
                    <td>
                      {item.status === 1
                        ? "Pending"
                        : item.status === 2
                        ? "Confirmed"
                        : item.status === 3
                        ? "In Progress"
                        : item.status === 4
                        ? "Completed"
                        : "Cancelled"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="footer-wrap pd-20 mb-20 card-box">
          DeskApp - Bootstrap 4 Admin Template By
          <a href="https://github.com/dropways" target="_blank">
            Ankit Hingarajiya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Booking;
