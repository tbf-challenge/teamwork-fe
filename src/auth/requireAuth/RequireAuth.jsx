import { Navigate, Outlet, useLocation } from "react-router-dom";
import { TOKEN_VALUE } from "../../data/constant";

const RequireAuth = () => {
  const location = useLocation();
  const token = window.localStorage.getItem(TOKEN_VALUE);
  console.log(location.pathname);

  if (token) return <Outlet />;

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
};

export default RequireAuth;
