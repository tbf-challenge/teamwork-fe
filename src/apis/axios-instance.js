import axios from "axios";

export const baseURL = "https://teamwork.up.railway.app/api/v1";
const axiosInstance = axios.create({
  baseURL
});

export default axiosInstance;
