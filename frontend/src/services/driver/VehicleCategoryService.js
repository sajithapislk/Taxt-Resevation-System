import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;
const userData = localStorage.getItem("driver");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};
// Service object to handle API requests related to user
const VehicleCategoryService = {
  List: async () => {
    try {
      const response = await axios.get(`${API_URL}/driver/vehicle-category`);
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