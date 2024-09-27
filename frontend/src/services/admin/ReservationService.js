import axios from "axios";

// Get the API URL from the environment variable
const API_URL = import.meta.env.REACT_APP_API_URL;

// Service object to handle API requests related to user
const ReservationService = {
    Booking: async (data) => {
    try {
      const response = await axios.post(
        `${API_URL}/admin/user/booking`,
        data
      );
      return response.data; // Return the response data (success message)
    } catch (error) {
      // Handle the error response
      if (error.response && error.response.data) {
        // If the backend returned an error response
        return { error: error.response.data.message };
      } else {
        // If the error is something else (e.g., network issue)
        return { error: "An error occurred. Please try again." };
      }
    }
  },
};

export default ReservationService;
