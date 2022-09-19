import {
  createContext, useState, useContext, useMemo
} from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import customJwtDecode from "../../utils/custom_JWT_decode";
// import useAxios from "./useAxios";
// import { baseURL } from "./useAxios";

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [token, setToken] = useState(null);

  const handleClick = () => {
    setSideBarOpen((prev) => !prev);
  };

  const contextData = useMemo(
    () => ({
      token,
      setToken,
      handleClick,
      sideBarOpen,
      setSideBarOpen,
      currentPage,
      setCurrentPage
    }),
    [token, sideBarOpen, currentPage]
  );

  return (
    <GeneralContext.Provider value={contextData}>
      {children}
    </GeneralContext.Provider>
  );
};

const GeneralStore = () => {
  return useContext(GeneralContext);
};

GeneralContext.propTypes = {
  children: PropTypes.node.isRequired
};

export default GeneralStore;
