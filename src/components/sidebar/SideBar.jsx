import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FiGrid } from "react-icons/fi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import {
  MdOutlineContentPaste, MdOutlineClass, MdOutlineReport, MdHelpOutline, MdOutlineSettings, MdLogout
} from "react-icons/md";

import SideBarStyles from "./sideBar.styles";

const SideBar = () => {
  const [active, setActive] = useState("Home");

  const ITEMS = [
    { title: "Home", icon: <FiGrid />, link: "/" },
    { title: "Employees", icon: <IoPeopleCircleOutline />, link: "/employees" },
    { title: "Posts", icon: <MdOutlineContentPaste />, link: "/posts" },
    { title: "Categories", icon: <MdOutlineClass />, link: "/categories" },
    { title: "Reports", icon: <MdOutlineReport />, link: "/reports" },
    { title: "More", icon: <CgMoreO />, link: "/more" },
    { title: "Help", icon: <MdHelpOutline />, link: "/help" },
    { title: "Settings", icon: <MdOutlineSettings />, link: "/settings" }
  ];

  const handleClick = (title) => {
    setActive(title);
  };

  useEffect(() => {
    setActive("Home");
  }, []);

  return (
    <SideBarStyles>
      <div>
        {ITEMS.slice(0, 6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={active === title ? "active item" : "item"}>
              {icon}
              <li>{title}</li>
            </div>
          </Link>
        ))}
      </div>

      <div className="second-list">
        {ITEMS.slice(6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={active === title ? "active item" : "item"}>
              {icon}
              <li>{title}</li>
            </div>
          </Link>
        ))}
        <Link to="/login">
          <div className="item">
            <MdLogout />
            <li>Logout</li>
          </div>
        </Link>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
