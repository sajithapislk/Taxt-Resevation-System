import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;

// Service object to handle API requests related to user
const UserService = {
  UserRegister: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, userData);
      return response.data; // Return the response data (success message)
    } catch (error) {
      // Handle the error response
      if (error.response && error.response.data) {
        // If the backend returned an error response
        return { error: error.response.data.message };
      } else {
        // If the error is something else (e.g., network issue)
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  DriverRegister: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/drivers/register`, userData);
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
  AdminRegister: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/admins/register`, userData);
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

export default UserService;