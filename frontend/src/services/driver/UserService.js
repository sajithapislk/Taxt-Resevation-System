import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;
const userData = localStorage.getItem("driver");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};
// Service object to handle API requests related to user
const UserService = {
  Info: async () => {
    try {
      const response = await axios.get(`${API_URL}/drivers/${user.id}`, config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/driver/register`, userData);
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
  Update: async (userData) => {
    try {
      const response = await axios.put(`${API_URL}/drivers/${userData.id}`, userData, config);
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
};

export default UserService;