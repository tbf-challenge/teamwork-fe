import { useEffect, useState } from "react";
import {
  Outlet, Navigate, useNavigate, useLocation
} from "react-router-dom";
import axios from "axios";
import useGeneralStore from "../../context/GeneralContext";
import Spinner from "../../components/spinner/Spinner";

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
    if (!accessToken && refreshToken) {
      const req = async () => {
        const data = JSON.stringify({
          email: "modestcream@gmail.com",
          refreshToken
        });

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
            setIsLoading(true);
            setAccessToken(response.data.data.accessToken);
            setRefreshToken(response.data.data.refreshToken);
            console.log("SUCCESSFULLLLL");
            // return navigate("/dashboard");
          })
          .catch((error) => {
            console.warn("RETRY ERROR", error);
            navigate("/login");
          })
          .finally(() => {
            setIsLoading(false);
          });
      };

      req();
    } else if (!refreshToken) {
      setIsLoading(false);
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
        <Spinner text="T B F CHALLENGE" />
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
      <Spinner text="LOADING, GOT ERROR" />
    </div>
  );
};

export default RequireAuth;
