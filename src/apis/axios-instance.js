import axios from "axios";

const backendUrl = "https://team-worker.herokuapp.com/api/v1/";
const axiosInstance = axios.create({
  baseURL: backendUrl
});

export default axiosInstance;
