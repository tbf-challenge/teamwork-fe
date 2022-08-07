import NavStyle from "./nav.style";

function Navbar() {
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
            <input type="text" placeholder="Input Search" className="searchInput" />
          </div>
          <div className="icons">
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
            <div>Username</div>
          </div>
        </div>
      </div>
    </NavStyle>
  );
}

export default Navbar;
