import axios from "axios";
const API_URL = "http://localhost:8000/auth";

export const registerUser = async (formData: {
  fullName: string;
  email: string;
  contact: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData, {
      withCredentials: true, // ensures cookies are passed
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      withCredentials: true, // ensures cookies are passed
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Invalid email or password"
    );
  }
};
