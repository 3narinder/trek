// src/api/user.ts
import axios from "axios";

const API_URL = "http://localhost:8000/user";

export const getAuthenticatedUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      withCredentials: true,
    });
    console.log("API response:", response.data); // Log the response
    return response.data;
  } catch (error: any) {
    console.error("API error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch user");
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch user");
  }
};
