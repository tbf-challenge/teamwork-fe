import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { TOKEN_VALUE } from "../../data/constant";

// Nothing here is useful at the moment
// It will be useful when we implement the authentication with refresh token
// if the jwt-decode is giving problem, i have a custom decoder to decode the token.
// it gave me problem some times ago

const PersistLogin = () => {
  const [isLoading, setisLoading] = useState(true);
  const token = window.localStorage.getItem(TOKEN_VALUE);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await jwtDecode(token);
      } catch (err) {
        window.localStorage.removeItem(TOKEN_VALUE);
      } finally {
        setisLoading(false);
      }
    };

    if (token) verifyToken();
    else setisLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? <h1>Loading...</h1> : <Outlet />;
};

export default PersistLogin;
