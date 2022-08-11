import PropTypes from "prop-types";
import NavStyle from "./nav.style";
import searchIcon from "../../Assets/iconSearch.svg";
import Msg from "../../Assets/Msg.svg";
import Bell from "../../Assets/Bell.svg";
import Avatar from "../../Assets/Avatar.svg";
import Ham from "../../Assets/Ham.svg";

const Navbar = ({ toggleNav, hamRef }) => {
  return (
    <NavStyle>
      <div className="logoWrap">
        <svg
          width="42"
          height="41"
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.9745" cy="20.4184" r="20.1151" fill="black" />
          <rect
            x="7.76758"
            y="19.0756"
            width="18.7741"
            height="18.7741"
            transform="rotate(-39.1944 7.76758 19.0756)"
            fill="white"
          />
        </svg>
        <h1>Brand Name</h1>
      </div>
      <div className="headWrap">
        <div className="head">
          <div className="title">
            <h1>Home</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Input Search"
              className="searchInput"
            />
            <img
              src={searchIcon}
              id="searchIcon"
              alt="Search Icon"
            />
          </div>
          <div className="icons">
            <a href="/"><img src={Msg} alt="Messages" /></a>
            <a href="/"><img src={Bell} alt="Notifications" /></a>
            <div className="profile">
              <a href="/">
                <img src={Avatar} alt="Profile" width="32px" />
              </a>
              <div className="admin">
                <p style={{ fontWeight: 600 }}>Temitayo A.</p>
                <p>Admin</p>
              </div>
            </div>
            <button
              id="ham"
              type="button"
              onClick={toggleNav}
              ref={hamRef}
            >
              <img src={Ham} alt="hamburger" />
            </button>
          </div>
        </div>
      </div>
    </NavStyle>
  );
};

Navbar.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  hamRef: PropTypes.shape().isRequired
};

export default Navbar;
