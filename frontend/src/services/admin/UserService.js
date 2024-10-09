import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;
const userData = localStorage.getItem("admin");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};
const UserService = {
  List: async () => {
    try {
      const response = await axios.get(`${API_URL}/users`, config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  FilterByTp: async (tp) => {
    try {
      const response = await axios.get(`${API_URL}/users/mobile/${tp}`, config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { error: 'Resource not found. Please check the phone number and try again.' };
      } else if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Unregister: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/register-guest`, userData, config);
      return response.data;
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
      const response = await axios.post(`${API_URL}/admin/user/update`, userData, config);
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
  Delete: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/admin/user/delete`, data, config);
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

export default UserService;