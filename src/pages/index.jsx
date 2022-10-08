import { useRef } from "react";
import { Outlet } from "react-router-dom";
import CategoriesWidget from "../components/categoriesWidget/CategoriesWidget";
import Navbar from "../components/navbar/Navbar";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import SideBar from "../components/sidebar/SideBar";
import PagesStyle from "./pagesStyle";

const PagesIndex = () => {
  const navRef = useRef();
  const ham = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("toggleOn");
    ham.current.classList.toggle("rotateOn");
  };

  return (
    <PagesStyle>
      <Navbar toggleNav={toggleNav} hamRef={ham} />
      <div className="pages">
        <div className="sidebar" ref={navRef}>
          <SideBar />
        </div>
        <div className="outlet">
          <PageWrapper>
            <section className="middlePage">
              <Outlet />
            </section>
            <CategoriesWidget header="Categories" />
          </PageWrapper>
        </div>
      </div>
    </PagesStyle>
  );
};

export default PagesIndex;
