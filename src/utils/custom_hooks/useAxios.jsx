import axios from "axios";
import customJwtDecode from "../../utils/custom_JWT_decode";
import dayjs from "dayjs";
import AuthFunc from "./AuthContext";

// const baseURL = "http://127.0.0.1:8000/";
export const baseURL = "https://django-todolist-api.herokuapp.com/";

const useAxios = () => {
  const { authTokens, logoutUser, setAuthTokens, setUser } = AuthFunc();

  const axiosInstance = axios.create({
    baseURL,
    headers: authTokens
      ? { Authorization: `JWT ${authTokens?.access}` }
      : undefined,
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = authTokens ? customJwtDecode(authTokens?.access) : null;
    const isExpired = authTokens
      ? dayjs.unix(user.exp).diff(dayjs()) < 1
      : null;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}api/token/refresh/`, {
      refresh: authTokens.refresh,
    });

    if (response.status === 200) {
      axiosInstance.defaults.headers[
        "Authorization"
      ] = `JWT ${response.data.access}`;

      axios.defaults.headers.common[
        "Authorization"
      ] = `JWT ${response.data.access}`;

      req.headers.Authorization = `JWT ${response.data.access}`;

      localStorage.setItem("authTokens", JSON.stringify(response.data));

      setAuthTokens(response.data);
      setUser(customJwtDecode(response.data.access));
      return req;
    } else {
      console.log("error");
      logoutUser();
    }
  });

  return axiosInstance;
};

export default useAxios;
