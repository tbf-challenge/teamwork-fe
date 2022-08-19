import PropTypes from "prop-types";
import { AiOutlineBell } from "react-icons/ai";
import NavStyle from "./nav.style";
import searchIcon from "../../Assets/images/iconSearch.svg";
import profile from "../../Assets/images/User Profile.png";
import Ham from "../../Assets/images/Ham.svg";
import Logo from "../../Assets/images/Logo.svg";
import MediumButton from "../buttons/MediumButton";

const Navbar = ({ toggleNav, hamRef }) => {
  return (
    <NavStyle>
      <div className="logoWrap">
        <img src={Logo} alt="logo" />
        <h2 className="brand-name">Logo</h2>
      </div>
      <div className="headWrap">
        <div className="head">
          <h1 className="title">Home</h1>
          <button id="ham" type="button" onClick={toggleNav} ref={hamRef}>
            <img src={Ham} alt="hamburger" />
          </button>
          <div className="search">
            <input
              type="text"
              placeholder="Input Search"
              className="searchInput"
            />
            <img src={searchIcon} id="searchIcon" alt="Search Icon" />
          </div>
          <div className="icons">
            <MediumButton
              Text="New Post"
              width="120px"
              bgColor="#1678F3"
              color="white"
              className="create"
            />
            <a href="/" className="bell">
              <AiOutlineBell />
            </a>
            <div className="profile">
              <a href="/">
                <img src={profile} alt="Profile" />
              </a>
              <div className="admin">
                <p style={{ fontWeight: 600, fontSize: "18px", color: "#1F2937" }}>Temitayo A.</p>
                <p>@Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavStyle>
  );
};

Navbar.propTypes = { toggleNav: PropTypes.func.isRequired, hamRef: PropTypes.string.isRequired };

export default Navbar;
