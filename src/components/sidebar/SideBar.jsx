import { useState } from "react";
import { Link } from "react-router-dom";
import SideBarStyles from "./sideBar.styles";

// Icons
import Home from "../../Assets/Home.svg";
import Employees from "../../Assets/Employee.svg";
import Posts from "../../Assets/Posts.svg";
import Category from "../../Assets/Category.svg";
import Report from "../../Assets/Report.svg";
import More from "../../Assets/More.svg";
import Help from "../../Assets/Help.svg";
import Settings from "../../Assets/Settings.svg";
import Logout from "../../Assets/Logout.svg";

const SideBar = () => {
  const [active, setActive] = useState("Home");

  const ITEMS = [
    {
      title: "Home",
      icon: Home,
      link: "/"
    },
    {
      title: "Employees",
      icon: Employees,
      link: "/employees"
    },
    {
      title: "Posts",
      icon: Posts,
      link: "/posts"
    },
    {
      title: "Categories",
      icon: Category,
      link: "/categories"
    },
    {
      title: "Reports",
      icon: Report,
      link: "/reports"
    },
    {
      title: "More",
      icon: More,
      link: "/more"
    },
    {
      title: "Settings",
      icon: Settings,
      link: "/settings"
    },
    {
      title: "Help",
      icon: Help,
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
              <img src={icon} alt={title} />
              <li>{title}</li>
            </div>
          </Link>
        ))}
      </div>

      <div>
        {ITEMS.slice(6).map(({ icon, title, link }) => (
          <Link key={title} to={link} onClick={() => handleClick(title)}>
            <div className={active === title ? "active item" : "item"}>
              <img src={icon} alt={title} />
              <li>{title}</li>
            </div>
          </Link>
        ))}
        <Link to="/login">
          <div className="item">
            <img src={Logout} alt="Logout" />
            <li>Logout</li>
          </div>
        </Link>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
