import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;

const userData = localStorage.getItem("driver");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};
// Service object to handle API requests related to user
const BookingService = {
    List: async () => {
      try {
        const response = await axios.get(`${API_URL}/bookings/driver/${user.id}`, config);
        return response.data; // Return the response data (e.g., token)
      } catch (error) {
        if (error.response && error.response.data) {
          return { error: error.response.data.message };
        } else {
          return { error: 'An error occurred. Please try again.' };
        }
      }
    },
    ListByStatus: async (status) => {
      try {
        const response = await axios.get(`${API_URL}/bookings/driver/${user.id}?status=${status}`, config);
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
      const response = await axios.get(`${API_URL}/bookings/${id}`, config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Confirm: async (id) => {
    try {
      const response = await axios.put(`${API_URL}/bookings/${id}/confirm`, config);
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
  Start: async (id) => {
    try {
      const response = await axios.put(`${API_URL}/bookings/${id}/start`, config);
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
  Complete: async (id) => {
    try {
      const response = await axios.put(`${API_URL}/bookings/${id}/complete`, config);
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
  Cancel: async (id) => {
    try {
      const response = await axios.put(`${API_URL}/bookings/${id}/cancel`, config);
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
  Feedback: async (data) => {
    try {
      const response = await axios.put(`${API_URL}/bookings/${data.id}/driver-feedback`, data, config);
      return response.data; // Return the response data (e.g., token)
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