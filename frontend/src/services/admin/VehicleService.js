import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;
const userData = localStorage.getItem("admin");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};
// Service object to handle authentication-related API requests
const VehicleService = {
  List: async () => {
    try {
      const response = await axios.get(`${API_URL}/vehicles`,config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Update: async (data) => {
    try {
      const response = await axios.put(`${API_URL}/vehicles/${data.id}`, data,config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Delete: async (data) => {
    try {
      const response = await axios.delete(`${API_URL}/vehicles/${data.id}`,config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  AvailableList: async (data) => {
    try {
      const response = await axios.get(`${API_URL}/vehicles/nearby`, {
        params: data,
      },config);
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

export default VehicleService;