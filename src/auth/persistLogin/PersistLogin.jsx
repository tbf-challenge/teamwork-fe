import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import useGeneralStore from "../../context/GeneralContext";
// import { AUTH_VALUES } from "../../data/constant";

// Nothing here is useful at the moment
// It will be useful when we implement the authentication with refresh token
// if the jwt-decode is giving problem, i have a custom decoder to decode the token.
// it gave me problem some times ago

const styles = {
  minHeight: "100%",
  minWidth: "100%",
  display: "grid",
  placeContent: "center",
  placeItem: "center",
  textAlign: "center"
};

const PersistLogin = () => {
  const [isLoading, setisLoading] = useState(true);
  const { accessToken } = useGeneralStore();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await jwtDecode(accessToken);
      } catch (err) {
        window.localStorage.removeItem("AUTH_VALUES");
      } finally {
        setisLoading(false);
      }
    };

    if (accessToken) verifyToken();
    else setisLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <div style={styles}>
      <h1>Loading...</h1>
    </div>
  ) : (
    <Outlet />
  );
};

export default PersistLogin;
