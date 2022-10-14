import axios from "axios";
// import customJwtDecode from "../utils/custom_JWT_decode";
import useGeneralStore from "../context/GeneralContext";

export const baseURL = "https://team-worker.herokuapp.com/api/v1";

const useAxios = () => {
  const {
    accessToken, logout, setAccessToken, setRefreshToken, refreshToken
  } = useGeneralStore();
  console.log(accessToken);

  const axiosInstance = axios.create({
    baseURL,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
  });

  axiosInstance.interceptors.response.use(async (resp) => {
    console.log("Accessing the data===========");
    console.log(resp.status);
    if (resp.status === 200) return resp;
    if (resp.status === 201) return resp;

    if (resp.status === 401) {
      console.log("This is unauth");
      const resendData = JSON.stringify({
        email: "modestcream@gmail.com",
        refreshToken
      });

      const config = {
        method: "post",
        url: `${baseURL}/auth/token/`,
        headers: {
          "Content-Type": "application/json"
        },
        data: resendData
      };

      await axios(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          console.log(response);
          axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
          // resp.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setAccessToken(response.data.data.accessToken);
          setRefreshToken(response.data.data.refreshToken);
          return resp;
        })
        .catch((error) => {
          console.log(error);
          console.log("logging out");
          logout();
          return resp;
        });
    }
    return resp;
  });

  return axiosInstance;
};

export default useAxios;
