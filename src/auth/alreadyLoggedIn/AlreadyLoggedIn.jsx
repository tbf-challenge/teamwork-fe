import { Navigate, Outlet } from "react-router-dom";
import useGeneralStore from "../../context/GeneralContext";
// import { AUTH_VALUES } from "../../data/constant";

const AlreadyLoggedIn = () => {
  // const token = window.localStorage.getItem(AUTH_VALUES);
  const { accessToken } = useGeneralStore();
  if (accessToken) return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default AlreadyLoggedIn;
