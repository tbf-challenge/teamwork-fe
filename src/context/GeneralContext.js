import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect
} from "react";
import axios from "axios";
import PropTypes from "prop-types";
import useLocalStore from "../hooks/useLocalStore";
// import { useNavigate } from "react-router-dom";
// import customJwtDecode from "../../utils/custom_JWT_decode";
// import useAxios from "../custom_hooks/useAxios";

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
  // const [user, setUser] = useState(() =>
  //   localStorage.getItem("authTokens")
  //     ? customJwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
  //     : null
  // );

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState({});
  const [refreshToken, setRefreshToken] = useLocalStore("AUTH_VALUES", null);

  // const axiosInstance = useAxios();

  const handleClick = () => {
    setSideBarOpen((prev) => !prev);
  };

  // const loginfunc = async () => {
  // const response = await axiosInstance.post("/auth/signin", {
  //   email: "modestcream@gmail.com",
  //   password: "1234abCD@#"
  // });
  // if (response.status === 200) {
  //   console.log(response);
  //   console.log("success response");
  // } else {
  //   console.log("success response");
  // }
  // };

  const logoutfunc = () => {
    setAccessToken(null);
    setRefreshToken(null);
    window.localStorage.removeItem("AUTH_VALUES");
  };

  const logout = useCallback(logoutfunc, [logoutfunc]);

  useEffect(() => {
    const req = async () => {
      const data = JSON.stringify({
        email: "modestcream@gmail.com",
        refreshToken
      });

      // console.warn("-===================", data);

      const config = {
        method: "post",
        url: "https://teamwork.up.railway.app/api/v1/auth/token/",
        headers: {
          "Content-Type": "application/json"
        },
        data
      };

      await axios(config)
        .then((response) => {
          setAccessToken(response.data.data.accessToken);
          setRefreshToken(response.data.data.refreshToken);
        })
        .catch((error) => {
          console.log("retry in general", error);
          console.log("===ERRORRRR===");
        });
      // .finally(() => setIsLoading(true));

      console.log("DDOONNEE");
    };
    console.log(accessToken);
    console.log("SETTING ACCESS");
    if (!accessToken) {
      req();
    }
  }, [accessToken, refreshToken, setRefreshToken]);

  const contextData = useMemo(
    () => ({
      accessToken,
      refreshToken,
      currentPage,
      sideBarOpen,
      user,
      logout,
      handleClick,
      setRefreshToken,
      setAccessToken,
      setSideBarOpen,
      setCurrentPage,
      setUser
    }),
    [
      user,
      sideBarOpen,
      setRefreshToken,
      logout,
      currentPage,
      accessToken,
      refreshToken
    ]
  );

  return (
    <GeneralContext.Provider value={contextData}>
      {children}
    </GeneralContext.Provider>
  );
};

const useGeneralStore = () => {
  return useContext(GeneralContext);
};

GeneralContext.propTypes = {
  children: PropTypes.node.isRequired
};

export default useGeneralStore;
