
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080/api`, 
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllAdmins = async () => {
  try {
    const response = await api.get(`/admindetails`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all admins:", error);
    throw error;
  }
};

export const AddNewAdmins = async (adminData) => {
  try {
    const response = await api.post("/admindetails", adminData); // ✅ send payload
    return response.data;
  } catch (error) {
    console.error("Error saving the admin:", error);
    throw error;
  }
};

