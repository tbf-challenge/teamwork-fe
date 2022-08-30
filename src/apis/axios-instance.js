import axios from "axios";

const backendUrl = "";
const axiosInstance = axios.create({
  baseURL: backendUrl
});

export default axiosInstance;
