import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const userData = localStorage.getItem("admin");
const user = JSON.parse(userData);
const config = {
  headers: { Authorization: `Bearer ${user && user.token}` }
};

const VehicleTypeService = {
  List: async () => {
    try {
      const response = await axios.get(`${API_URL}/vehicletypes`, config);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  Create: async (data) => {
    try {
      const response = await axios.post(`${API_URL}/vehicletypes`, data, config);
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
      const response = await axios.put(`${API_URL}/vehicletypes/${data.id}`, data, config);
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
      const response = await axios.delete(`${API_URL}/vehicletypes/${data.id}`, config);
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

export default VehicleTypeService;