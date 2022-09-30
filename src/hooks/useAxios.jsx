import axios from "axios";
import dayjs from "dayjs";
import customJwtDecode from "../utils/custom_JWT_decode";
import useGeneralStore from "../context/GeneralContext";

export const baseURL = "https://team-worker.herokuapp.com/api/v1";

const useAxios = () => {
  const {
    accessToken, logout, setAccessToken, setRefreshToken, refreshToken
  } = useGeneralStore();

  const axiosInstance = axios.create({
    baseURL,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = accessToken ? customJwtDecode(accessToken) : null;
    const isExpired = accessToken ? dayjs.unix(user.exp).diff(dayjs()) < 1 : null;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/tokens/`, {
      email: "modestcream@gmail.com",
      refreshToken
    });

    if (response.status === 200) {
      axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
      // console.log(response)
      req.headers.Authorization = `Bearer ${response.data.accessToken}`;

      window.localStorage.setItem("tokens", JSON.stringify(response.data.accessToken));

      setAccessToken(response.data);
      setRefreshToken(customJwtDecode(response.data));
      return req;
    }

    console.log("logout");

    return logout();
  });

  return axiosInstance;
};

export default useAxios;
