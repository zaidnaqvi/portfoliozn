import axios from "axios";

const API_URL = "https://your-backend-api.com/contact";

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
