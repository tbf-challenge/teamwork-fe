import { useEffect, useState } from "react";
import {
  Outlet, Navigate, useNavigate, useLocation
} from "react-router-dom";
import axios from "axios";
import useGeneralStore from "../../context/GeneralContext";

const RequireAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [isWaiting, setIsWaiting] = useState(false);
  const {
    accessToken, setAccessToken, setRefreshToken, refreshToken
  } = useGeneralStore();

  const styles = {
    minHeight: "100%",
    minWidth: "100%",
    display: "grid",
    placeContent: "center",
    placeItem: "center",
    textAlign: "center"
  };

  useEffect(() => {
    setIsLoading(true);
    // setIsWaiting(true);
    const req = async () => {
      const data = JSON.stringify({
        email: "modestcream@gmail.com",
        refreshToken
      });

      // console.warn("-===================", data);
      // console.warn("+++++++++++++++++++", data);
      // console.warn("-===================", data);

      const config = {
        method: "post",
        url: "https://team-worker.herokuapp.com/api/v1/auth/token/",
        headers: {
          "Content-Type": "application/json"
        },
        data
      };

      await axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setIsLoading(true);
          setAccessToken(response.data.data.accessToken);
          setRefreshToken(response.data.data.refreshToken);
          console.log(response.data.data);
          // return navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          console.log("==ERRORRRR=========");
          navigate("/login");
        })
        .finally(() => {
          setIsLoading(false);
          // setIsWaiting(false);
        });
    };

    if (!accessToken && refreshToken) {
      req();
    } else if (!refreshToken) {
      setIsLoading(false);
      // setIsWaiting(false);
      navigate("/login");
    } else {
      setIsLoading(false);
      // setIsWaiting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(accessToken);
  // console.log(localStorage.getItem("AUTH_VALUES"));

  if (accessToken) return <Outlet />;

  if (isLoading) {
    return (
      <div style={styles}>
        <h1>LOADING, PLEASE WAIT TO LOAD</h1>
      </div>
    );
    // eslint-disable-next-line
  } else if (!isLoading && !accessToken) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname
        }}
        // state={{ from: location }}
        // replace
      />
    );
  }

  return (
    <div style={styles}>
      <h1>LOADING, GOT ERROR</h1>
    </div>
  );
};

export default RequireAuth;
