import axios from "axios";
import customJwtDecode from "../../utils/custom_JWT_decode";
import dayjs from "dayjs";
import GeneralStore from "../context/GeneralContext";

export const baseURL = "https://team-worker.herokuapp.com/api/v1/";

const useAxios = () => {
  const { token, logoutUser, setAuthTokens, setUser } = GeneralStore();

  const axiosInstance = axios.create({
    baseURL,
    headers: authTokens ? { Authorization: `Bearer ${token}` } : undefined
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = token ? customJwtDecode(token) : null;
    const isExpired = token
      ? dayjs.unix(user.exp).diff(dayjs()) < 1
      : null;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}token/`, {
      refresh: token
    });

    if (response.status === 200) {
      axiosInstance.defaults.headers[
        "Authorization"
      ] = `JWT ${response.data.access}`;

      axios.defaults.headers.common[
        "Authorization"
      ] = `JWT ${response.data.access}`;

      req.headers.Authorization = `JWT ${response.data.token}`;

      localStorage.setItem("token", JSON.stringify(response.data.token));

      setToken(response.data);
      setUser(customJwtDecode(response.data));
      return req;
    } else {
      console.log("error");
      logoutUser();
    }
  });

  return axiosInstance;
};

export default useAxios;
