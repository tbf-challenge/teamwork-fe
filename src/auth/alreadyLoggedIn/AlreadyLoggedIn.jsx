import { Navigate, Outlet } from "react-router-dom";
import { TOKEN_VALUE } from "../../data/constant";

const AlreadyLoggedIn = () => {
  const token = localStorage.getItem(TOKEN_VALUE);

  if (token) return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default AlreadyLoggedIn;
