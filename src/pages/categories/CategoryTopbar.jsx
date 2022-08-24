import { Link } from "react-router-dom";
import { Topbar } from "./categories.styles";
import Forward from "../../Assets/images/forward.svg";

const CategoryTopbar = () => {
  return (
    <Topbar>
      <div className="topbar">
        <ul>
          <li><Link to="/categories">All</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/categories">Finance</Link></li>
          <li><Link to="/categories">Technology</Link></li>
          <li><Link to="/categories">UX</Link></li>
          <li><Link to="/categories">Design</Link></li>
          <li><Link to="/categories">Others</Link></li>
          <li><Link to="/categories">Web3</Link></li>
          <img src={Forward} alt="foward" />
        </ul>
      </div>
    </Topbar>
  );
};

export default CategoryTopbar;
