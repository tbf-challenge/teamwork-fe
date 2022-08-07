import { Link } from "react-router-dom";
import SideBarStyles from "./sideBar.styles";

function SideBar() {
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

  return (
    <SideBarStyles>
      <div>
        {ITEMS.slice(0, 6).map(({ icon, title, link }) => (
          <div key={title} className="item">
            <li>{icon}</li>
            <li>
              <Link to={link}>{title}</Link>
            </li>
          </div>
        ))}
      </div>

      <div>
        {ITEMS.slice(6).map(({ icon, title, link }) => (
          <div key={title} className="item">
            <li>{icon}</li>
            <li>
              <Link to={link}>{title}</Link>
            </li>
          </div>
        ))}

        <div className="item">
          <li>Out</li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </div>
      </div>
    </SideBarStyles>
  );
}

export default SideBar;
