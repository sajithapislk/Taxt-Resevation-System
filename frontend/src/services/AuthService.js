import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.REACT_APP_API_URL;

// Service object to handle authentication-related API requests
const AuthService = {
  UserLogin: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, credentials);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  DriverLogin: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/driver/login`, credentials);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  AdminLogin: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/admin/login`, credentials);
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

export default AuthService;