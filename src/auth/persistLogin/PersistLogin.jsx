import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useGeneralStore from "../../context/GeneralContext";
// import { AUTH_VALUES } from "../../data/constant";

const styles = {
  minHeight: "100%",
  minWidth: "100%",
  display: "grid",
  placeContent: "center",
  placeItem: "center",
  textAlign: "center"
};

const PersistLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const {
    accessToken, setAccessToken, setRefreshToken
  } = useGeneralStore();
  const storageData = JSON.parse(window.localStorage.getItem("AUTH_VALUES"));

  useEffect(() => {
    const req = async () => {
      const data = {
        email: storageData.email,
        refreshToken: storageData.refreshToken
      };

      const config = {
        method: "post",
        url: `https://team-worker.herokuapp.com/api/v1/auth/token`,
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
          console.warn(error);
          navigate("/login");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    if (!accessToken && storageData?.refreshToken) {
      req();
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <div style={styles}>
      <h1>LOADING, PLEASE WAIT TO LOAD</h1>
    </div>
  ) : (
    <Outlet />
  );
};

export default PersistLogin;
