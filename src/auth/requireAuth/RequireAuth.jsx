import { Outlet } from "react-router-dom";
// import { TOKEN_VALUE } from "../../data/constant";

const RequireAuth = () => {
  // const location = useLocation();
  // const token = window.localStorage.getItem(TOKEN_VALUE);

  // if (token) return <Outlet />;

  // return (
  //   <Navigate
  //     to="/login"
  //     state={{
  //       from: location.pathname
  //     }}
  //     // state={{ from: location }}
  //     // replace
  //   />
  // );
  return <Outlet />;
};

export default RequireAuth;
