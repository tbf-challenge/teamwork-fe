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
import More from "./pages/more/More";
import Reports from "./pages/reports/Reports";
import Register from "./auth/register/Register";
import GlobalStyles from "./globalStyles";
import AllEmployees from "./pages/employees/AllEmployees";
import CreateGIF from "./pages/posts/createGifs/CreateGIF";
import CreateArticle from "./pages/posts/createArticle/CreateArticle";
import GeneralStore from "./utils/context/GeneralContext";

const App = () => {
  const { setCurrentPage } = GeneralStore();
  const location = useLocation();

  useEffect(() => {
    const loc = location.pathname.replace("/", "");
    const page = loc.charAt(0).toUpperCase() + loc.slice(1);
    const newPage = page === "" ? "Home" : page;
    setCurrentPage(newPage);
  }, [setCurrentPage, location]);

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<PagesIndex />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="more" element={<More />} />
          <Route path="employees">
            <Route index element={<AllEmployees />} />
            <Route path="create" element={<Employees />} />
          </Route>
          <Route path="categories" element={<Categories />} />
          <Route path="help" element={<Help />} />
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path="gif" element={<CreateGIF />} />
            <Route path="article" element={<CreateArticle />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
