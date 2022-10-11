import axios from "axios";
// import customJwtDecode from "../utils/custom_JWT_decode";
import useGeneralStore from "../context/GeneralContext";

export const baseURL = "https://team-worker.herokuapp.com/api/v1";

const useAxios = () => {
  const {
    accessToken, setAccessToken, setRefreshToken, logout, refreshToken
  } = useGeneralStore();
  console.log(accessToken);

  const axiosInstance = axios.create({
    baseURL,
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {}
  });

  axiosInstance.interceptors.request.use(async (req) => {
    console.warn("Accessing the data===========");
    console.warn(req.status);
    if (req.status === 401) {
      console.warn("moreAccessing the data=================");
      const resendData = JSON.stringify({
        email: "modestcream@gmail.com",
        refreshToken
      });

      const config = {
        method: "post",
        url: `${baseURL}/tokens/`,
        headers: {
          "Content-Type": "application/json"
        },
        data: resendData
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

          axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
          // console.log(response)
          req.headers.Authorization = `Bearer ${response.data.accessToken}`;

          setAccessToken(response.data);
          setRefreshToken(response.data);
          return req;
        })
        .catch((error) => {
          console.log(error);
          console.log("logging out");
          return logout();
        });
    }
  });

  return axiosInstance;
};

export default useAxios;
