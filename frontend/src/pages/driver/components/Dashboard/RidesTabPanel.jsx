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
import BookingService from "../../../../services/driver/BookingService";

const RidesTabPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState({
    bookingId: null,
    rate: 0,
    feedback: "",
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await BookingService.List();
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

  // Handle feedback submit
  const handleSubmitFeedback = async () => {
    setFeedbackSubmitted(true);
    const data = await BookingService.Feedback(feedback);
    // Simulating feedback submission
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

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
      <div className="row small-div">
        <div className="col-lg-12">
          <div className="total-earning-table table-responsive">
            {bookings.length > 0 ? (
              <Table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">pickUpPlace</th>
                    <th scope="col">dropOffPlace</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={booking.id} scope="row">
                      <td>{index + 1}</td>
                      <td>{booking.pickUpPlace}</td>
                      <td>{booking.dropOffPlace}</td>
                      <td>
                        <span
                          className={`badge ${
                            booking.status === 1 ? "bg-success" : // Available
                            booking.status === 2 ? "bg-primary" : // InService
                            booking.status === 5 ? "bg-warning" : // Maintenance
                            booking.status === 3 ? "bg-danger" : // Offline
                            "bg-secondary" // Retired
                          }`}
                        >
                          {booking.status === 1
                            ? "Pending"
                            : booking.status === 2
                            ? "Confirmed"
                            : booking.status === 3
                            ? "In Progress"
                            : booking.status === 4
                            ? "Completed"
                            : "Cancelled"}
                        </span>
                      </td>
                      <td>LKR {booking.price.toFixed(2)}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => handleShowModal(booking)}
                          disabled={booking.status !== 4}
                        >
                          Give Feedback
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Alert variant="info">No bookings found.</Alert>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {feedbackSubmitted ? (
            <Alert variant="success">Thank you for your feedback!</Alert>
          ) : (
            <Form>
              <Form.Group>
                <Form.Label>Rate us:</Form.Label>
                <div className="d-flex justify-content-around mb-3">
                  {[0, 1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      style={{
                        cursor: "pointer",
                        fontSize: "24px",
                        color: star <= feedback.rate ? "#FFD700" : "#ccc",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>
              <Form.Group controlId="feedbackForm.ControlTextarea">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={feedback.feedback}
                  onChange={(e) =>
                    setFeedback((prev) => ({
                      ...prev,
                      feedback: e.target.value,
                    }))
                  }
                  placeholder="Enter your feedback here"
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        {!feedbackSubmitted && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleSubmitFeedback}
              disabled={!feedback.feedback.trim()}
            >
              Submit Feedback
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
};

export default RidesTabPanel;
