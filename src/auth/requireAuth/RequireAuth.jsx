import {
  Outlet, Navigate, useLocation
} from "react-router-dom";
import useGeneralStore from "../../context/GeneralContext";

const RequireAuth = () => {
  const location = useLocation();
  const { accessToken } = useGeneralStore();

  if (accessToken) return <Outlet />;

  return (
    <Navigate
      to="/login"
      state={{
        from: location.pathname
      }}
      replace
    />
  );
};

export default RequireAuth;
