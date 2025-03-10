import axios from "axios";
import Feedback from "react-bootstrap/esm/Feedback";

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;

const userData = localStorage.getItem("user");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` },
};
console.log(config);

// Service object to handle API requests related to user
const BookingService = {
  List: async () => {
    try {
      const response = await axios.get(
        `${API_URL}/bookings/user/${user.id}`,
        config
      );
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: "An error occurred. Please try again." };
      }
    }
  },
  ListByStatus: async (status) => {
    try {
      const response = await axios.get(
        `${API_URL}/bookings/user/${user.id}?status=${status}`,
        config
      );
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: "An error occurred. Please try again." };
      }
    }
  },
  Info: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/user/booking/${id}`, config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: "An error occurred. Please try again." };
      }
    }
  },
  Request: async (userData) => {
    try {
      const response = await axios.post(
        `${API_URL}/bookings`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: "An error occurred. Please try again." };
      }
    }
  },
  Feedback: async (data) => {
    try {
      const response = await axios.put(
        `${API_URL}/bookings/${data.id}/user-feedback`,
        data,
        config
      );
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: "An error occurred. Please try again." };
      }
    }
  },
};

export default BookingService;
