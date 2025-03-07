import axios from "axios";

const API_URL = "http://localhost:8000/tour";

export const fetchAllTours = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response, `<---- tours`);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch tours");
  }
};

export const fetchTourById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch tour");
  }
};
