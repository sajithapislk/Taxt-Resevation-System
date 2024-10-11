// BookingHistory.js
import React, { useEffect, useState } from "react";
import {
  Table,
  Spinner,
  Alert,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import BookingService from "../../services/user/BookingService";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await BookingService.ListByStatus(3);
        setBookings(data);
      } catch (err) {
        setError("Failed to fetch booking history.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Open modal and set current booking
  const handleShowModal = (booking) => {
    setFeedback({ id: booking.id, rate: 0, feedback: "" });
    setFeedbackSubmitted(false);
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => setShowModal(false);

  const handleRatingChange = (newRating) => {
    console.log(newRating);
    setFeedback((prevFeedback) => ({ ...prevFeedback, rate: newRating }));
  };
  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Booking History</h2>
      {bookings.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>pickUpPlace</th>
              <th>dropOffPlace</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.pickUpPlace}</td>
                <td>{booking.dropOffPlace}</td>
                <td>
                  <span
                    className={`badge ${
                      booking.status === 4
                        ? "bg-success"
                        : booking.status === 1
                        ? "bg-warning"
                        : "bg-danger"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td>{booking.price}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="info">No bookings found.</Alert>
      )}
    </Container>
  );
};

export default BookingHistory;
