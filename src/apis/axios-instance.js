import axios from "axios";

export const baseURL = "https://teamwork-t1z2.onrender.com/api/v1";
const axiosInstance = axios.create({
  baseURL
});

export default axiosInstance;
