import { useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import PagesIndex from "./pages";
import Settings from "./pages/settings/Settings";
import Categories from "./pages/categories/Categories";
import Employees from "./pages/employees/Employees";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import Help from "./pages/help/Help";
import Reports from "./pages/reports/Reports";
import ReportsInfo from "./pages/reports/ReportsInfo/ReportsInfo";
import Register from "./auth/register/Register";
import GlobalStyles from "./globalStyles";
import AllEmployees from "./pages/employees/AllEmployees";
import CreateGIF from "./pages/posts/createGifs/CreateGIF";
import CreateArticle from "./pages/posts/createArticle/CreateArticle";
import GeneralStore from "./utils/context/GeneralContext";
import Business from "./pages/categories/Business";
import Event from "./pages/categories/Event";
import LandingPage from "./pages/landing-page/LandingPage";
import PersistLogin from "./auth/persistLogin/PersistLogin";
import AlreadyLoggedIn from "./auth/alreadyLoggedIn/AlreadyLoggedIn";
import RequireAuth from "./auth/requireAuth/RequireAuth";

const App = () => {
  const { setCurrentPage } = GeneralStore();
  const location = useLocation();

  useEffect(() => {
    let loc = location.pathname.toString().replace("dashboard", "");
    loc = location.pathname.replace("/", "");
    let page = loc.slice(10);
    page = page.charAt(0).toUpperCase() + page.slice(1);
    const newPage = page === "" ? "Home" : page;
    setCurrentPage(newPage);
  }, [setCurrentPage, location]);

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route element={<PersistLogin />}>

          <Route element={<AlreadyLoggedIn />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<PagesIndex />}>
              <Route index element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="reports">
                <Route index element={<Reports />} />
                <Route path=":id" element={<ReportsInfo />} />
              </Route>
              <Route path="employees">
                <Route index element={<AllEmployees />} />
                <Route path="create" element={<Employees />} />
              </Route>
              <Route path="categories">
                <Route index element={<Categories />} />
              </Route>
              <Route path="event" element={<Event />} />
              <Route path="business" element={<Business />} />
              <Route path="help" element={<Help />} />
              <Route path="posts">
                <Route index element={<Posts />} />
                <Route path="gif" element={<CreateGIF />} />
                <Route path="article" element={<CreateArticle />} />
              </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </div>
  );
};

export default App;
