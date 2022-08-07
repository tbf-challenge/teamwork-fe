import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import PagesStyle from "./pagesStyle";

const PagesIndex = () => {
  return (
    <PagesStyle>
      <Navbar />
      <div className="pages">
        <div className="sidebar">
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
