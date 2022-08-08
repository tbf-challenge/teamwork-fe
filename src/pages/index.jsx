import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import PagesStyle from "./pagesStyle";

const PagesIndex = () => {
  // const [showNav, setShowNav] = useState(false);
  const navRef = useRef();
  const ham = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("toggleOn");
    ham.current.classList.toggle("rotateOn");
  };
  return (
    <PagesStyle>
      <Navbar
        toggleNav={toggleNav}
        hamRef={ham}
      />
      <div className="pages">
        <div className="sidebar" ref={navRef}>
          <SideBar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </PagesStyle>
  );
};

export default PagesIndex;
