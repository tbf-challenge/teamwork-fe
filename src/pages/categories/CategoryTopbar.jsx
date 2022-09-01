import { Link } from "react-router-dom";
import {
  Topbar, Nav, Nav2, Nav3
}
  from "./categories.styles";
import Forward from "../../Assets/images/forward.svg";

const CategoryTopbar = () => {
  return (
    <Topbar>
      <Nav><Link to="/categories">All</Link></Nav>
      <Nav2><Link to="/business">Business</Link></Nav2>
      <Nav3><Link to="/event">Event</Link></Nav3>
      {/* <Nav><Link to="/categories">Finance</Link></Nav>
      <Nav><Link to="/categories">Technology</Link></Nav>
      <Nav><Link to="/categories">UX</Link></Nav>
      <Nav><Link to="/categories">Design</Link></Nav>
      <Nav><Link to="/categories">Others</Link></Nav>
      <Nav><Link to="/categories">Web3</Link></Nav> */}
      <img src={Forward} alt="foward" />
      {/* <div className="">
        <ul className="links">
          <li className="all"><Link to="/categories">All</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/event">Event</Link></li>
          <li><Link to="/categories">Finance</Link></li>
          <li><Link to="/categories">Technology</Link></li>
          <li><Link to="/categories">UX</Link></li>
          <li><Link to="/categories">Design</Link></li>
          <li><Link to="/categories">Others</Link></li>
          <li><Link to="/categories">Web3</Link></li>
        </ul>
      </div> */}
    </Topbar>
  );
};

export default CategoryTopbar;
