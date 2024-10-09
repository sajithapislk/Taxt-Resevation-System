import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;
const userData = localStorage.getItem("admin");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};
// Service object to handle API requests related to user
const BookingService = {
    List: async () => {
      try {
        const response = await axios.get(`${API_URL}/bookings`);
        return response.data; // Return the response data (e.g., token)
      } catch (error) {
        if (error.response && error.response.data) {
          return { error: error.response.data.message };
        } else {
          return { error: 'An error occurred. Please try again.' };
        }
      }
    },
  Info: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/admin/booking/${id}`);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Update: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/admin/booking/update`, userData);
      return response.data; // Return the response data (success message)
    } catch (error) {
      // Handle the error response
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Request: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/bookings`, userData, config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
};

export default BookingService;