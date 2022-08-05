import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import PagesStyle from "./pagesStyle";

const PagesIndex = () => {
  return (
    <PagesStyle>
      <Navbar />
      <div className="pages">
        <SideBar className="sidebar" />
        <Outlet className="outlet" />
      </div>
    </PagesStyle>
  );
};

export default PagesIndex;
