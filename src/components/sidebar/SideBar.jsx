import { useState } from "react";
import { Link } from "react-router-dom";
import SideBarStyles from "./sideBar.styles";

const SideBar = () => {
  const [active, setActive] = useState("Home");

  const ITEMS = [
    {
      title: "Home",
      icon: "ico",
      link: "/"
    },
    {
      title: "Employees",
      icon: "ico",
      link: "/employees"
    },
    {
      title: "Posts",
      icon: "ico",
      link: "/posts"
    },
    {
      title: "Categories",
      icon: "ico",
      link: "/categories"
    },
    {
      title: "Reports",
      icon: "ico",
      link: "/reports"
    },
    {
      title: "More",
      icon: "ico",
      link: "/more"
    },
    {
      title: "Settings",
      icon: "ico",
      link: "/settings"
    },
    {
      title: "Help",
      icon: "ico",
      link: "/help"
    }
  ];

  const handleClick = (title) => {
    setActive(title);
  };

  return (
    <SideBarStyles>
      <div>
        {ITEMS.slice(0, 6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={active === title ? "active item" : "item"}>
              <li>{icon}</li>
              <li>{title}</li>
            </div>
          </Link>
        ))}
      </div>

      <div>
        {ITEMS.slice(6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={active === title ? "active item" : "item"}>
              <li>{icon}</li>
              <li>{title}</li>
            </div>
          </Link>
        ))}
        <Link to="/login">
          <div className="item">
            <li>Out</li>
            <li>Logout</li>
          </div>
        </Link>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
