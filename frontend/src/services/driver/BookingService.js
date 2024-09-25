import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.REACT_APP_API_URL;

// Service object to handle API requests related to user
const BookingService = {
    List: async () => {
      try {
        const response = await axios.get(`${API_URL}/user/booking`);
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
      const response = await axios.get(`${API_URL}/user/booking/${id}`);
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
      const response = await axios.post(`${API_URL}/user/booking/update`, userData);
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
};

export default BookingService;