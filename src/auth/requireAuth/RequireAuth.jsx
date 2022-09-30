import { useEffect, useState } from "react";
import {
  Outlet, Navigate, useNavigate, useLocation
} from "react-router-dom";
import axios from "axios";
import useGeneralStore from "../../context/GeneralContext";

const RequireAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
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
    const req = async () => {
      const data = JSON.stringify({
        email: "modestcream@gmail.com",
        refreshToken
      });

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
          setIsLoading(true);
          setAccessToken(response.data.data.accessToken);
          setRefreshToken(response.data.data.refreshToken);
          // return navigate("/dashboard");
        })
        .catch((error) => {
          console.warn(error);
          navigate("/login");
        })
        .finally(() => {
          setIsLoading(false);
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (accessToken) return <Outlet />;

  if (isLoading) {
    return (
      <div style={styles}>
        <h1>LOADING, PLEASE WAIT TO LOAD</h1>
      </div>
    );
  }

  if (!isLoading && !accessToken) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname
        }}
        // state={{ from: location }}
        replace
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
