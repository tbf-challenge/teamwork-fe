import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons
import { FiGrid } from "react-icons/fi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import {
  MdOutlineContentPaste,
  MdOutlineClass,
  MdOutlineReport,
  MdHelpOutline,
  MdOutlineSettings,
  MdLogout
} from "react-icons/md";

import SideBarStyles from "./sideBar.styles";
import useGeneralStore from "../../context/GeneralContext";
// import { AUTH_VALUES } from "../../data/constant";

const SideBar = () => {
  // const [currentPage, setCurrentPage] = useState("Home");
  const {
    currentPage, setCurrentPage, setAccessToken, setRefreshToken
  } = useGeneralStore();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage, setCurrentPage]);

  const ITEMS = [
    { title: "Home", icon: <FiGrid />, link: "/dashboard/home" },
    {
      title: "Employees",
      icon: <IoPeopleCircleOutline />,
      link: "/dashboard/employees"
    },
    {
      title: "Posts",
      icon: <MdOutlineContentPaste />,
      link: "/dashboard/posts"
    },
    {
      title: "Categories",
      icon: <MdOutlineClass />,
      link: "/dashboard/categories"
    },
    { title: "Reports", icon: <MdOutlineReport />, link: "/dashboard/reports" },
    { title: "Help", icon: <MdHelpOutline />, link: "/dashboard/help" },
    {
      title: "Settings",
      icon: <MdOutlineSettings />,
      link: "/dashboard/settings"
    }
  ];

  const handleClick = (title) => {
    setCurrentPage(title);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("AUTH_VALUES");
    setAccessToken(null);
    setRefreshToken(null);
    navigate("/login");
  };

  return (
    <SideBarStyles>
      <div>
        {ITEMS.slice(0, 5).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div
              className={currentPage === title ? "currentPage item" : "item"}
            >
              {icon}
              <li>{title}</li>
            </div>
          </Link>
        ))}
      </div>

      <div className="second-list">
        {ITEMS.slice(5).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div
              className={currentPage === title ? "currentPage item" : "item"}
            >
              {icon}
              <li>{title}</li>
            </div>
          </Link>
        ))}

        <button type="button" onClick={handleLogout}>
          <div className="item">
            <MdLogout />
            <li>Logout</li>
          </div>
        </button>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
