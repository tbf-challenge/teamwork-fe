// import { createContext, useState, useContext, useMemo } from "react";
// import PropTypes from "prop-types";
// // import { useNavigate } from "react-router-dom";
// // import customJwtDecode from "../../utils/custom_JWT_decode";
// // import useAxios from "./useAxios";
// // import { baseURL } from "./useAxios";

// export const GeneralContext = createContext(null);

// export const GeneralProvider = ({ children }) => {
//   const [sideBarOpen, setSideBarOpen] = useState(false);

//   const handleClick = () => {
//     setSideBarOpen((prev) => !prev);
//   };

//   const contextData = useMemo(
//     () => ({
//       handleClick,
//       sideBarOpen,
//       setSideBarOpen
//     }),
//     [sideBarOpen]
//   );

//   return (
//     <GeneralContext.Provider value={contextData}>
//       {children}
//     </GeneralContext.Provider>
//   );
// };

// const GeneralStore = () => {
//   return useContext(GeneralContext);
// };

// GeneralContext.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default GeneralStore;
