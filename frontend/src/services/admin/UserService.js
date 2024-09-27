UserUpdate: async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/user/update`, userData);
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
  List: async () => {
    try {
      const response = await axios.get(`${API_URL}/admin/user`);
      return response.data; // Return the response data (e.g., token)
    } catch (error) {
      if (error.response && error.response.data) {
        return { error: error.response.data.message };
      } else {
        return { error: 'An error occurred. Please try again.' };
      }
    }
  },
  UserUpdate: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/admin/user/update`, userData);
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
      const response = await axios.post(`${API_URL}/admin/user/delete`, data);
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

export default UserService;