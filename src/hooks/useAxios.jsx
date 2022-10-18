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

  axiosInstance.interceptors.response.use(
    (resp) => resp,
    async (error) => {
      console.log("====Accessing the data due to error===");
      console.log(error.status);
      if (error.status === 401) {
        console.log("This is unauth");
        const resendData = JSON.stringify({
          email: "modestcream@gmail.com",
          refreshToken
        });

        const refreshConfig = {
          method: "post",
          url: `${baseURL}/auth/token/`,
          headers: {
            "Content-Type": "application/json"
          },
          data: resendData
        };

        await axios(refreshConfig)
          .then((response) => {
            // console.log(JSON.stringify(response.data));
            console.log(response);
            axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
            // resp.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setAccessToken(response.data.data.accessToken);
            setRefreshToken(response.data.data.refreshToken);
            return response;
          })
          .catch((err) => {
            console.log(err);
            console.log("logging out");
            logout();
            return Promise.reject(error);
          });
      }
    }
  );

  return axiosInstance;
};

export default useAxios;

// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

// If you need to remove an interceptor later you can.

// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);
