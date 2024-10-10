import axios from "axios";

// Get the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL;

// Service object to handle API requests related to user
const DriverService = {
  List: async (data) => {
    try {
      const response = await axios.get(`${API_URL}/vehicles`, {
        params: data,
      });
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

export default DriverService;
