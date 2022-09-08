import axios from "axios";

export const baseURL = "https://team-worker.herokuapp.com/api/v1/";
const axiosInstance = axios.create({
  baseURL
});

export default axiosInstance;
