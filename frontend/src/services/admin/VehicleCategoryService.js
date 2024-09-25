import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.REACT_APP_API_URL;

// Service object to handle API requests related to user
const VehicleCategoryService = {
  List: async () => {
    try {
      const response = await axios.get(`${API_URL}/admin/vehicle-category`);
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
      const response = await axios.post(`${API_URL}/admin/vehicle-category`, data);
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
      const response = await axios.post(`${API_URL}/admin/vehicle-category/delete`, data);
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

export default VehicleCategoryService;