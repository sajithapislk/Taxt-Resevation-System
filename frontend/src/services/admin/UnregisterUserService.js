import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;

// Service object to handle API requests related to user
const UnregisterUserService = {
  FilterByTp: async (tp) => {
    try {
      const response = await axios.get(`${API_URL}/admin/unregister-user/tp/${tp}`);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  UnregisterUserRegister: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/admin/unregister`, userData);
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

export default UnregisterUserService;