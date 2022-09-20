import styled from "styled-components";

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vh;
  min-height: 85vh;
  justify-content: space-between;

  li {
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: #9ca3af;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  div.item {
    display: flex;
    justify-content: start;
    padding-left: 20px;
    align-items: center;
    list-style-type: none;
    gap: 10px;
    height: 50px;
    margin-bottom: 3px;

    svg {
      width: 24px;
      height: 24px;
      color: #9ca3af;
    }
  }

  button {
    background: none;
    outline: none;
    cursor: pointer;
  }

  .second-list {
    padding-top: 5vh;
  }
  .currentPage {
    position: relative;
    background: transparent;
    z-index: 2;

    ::before {
      content: "";
      background-color: #e8f2fe;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
      transition: 0.3s;
      animation: leftToRight infinite 20s linear;
      animation-name: leftToRight;
      animation-timing-function: ease-in-out;
      animation-duration: 0.4s;
      animation-iteration-count: 1;
    }

    svg {
      color: #1678f3 !important;
    }
    li {
      color: #1678f3;
      font-weight: 600;
    }
  }

  .close {
    display: none;
  }

  @keyframes leftToRight {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    div.item {
      flex-direction: column;
      padding-left: 0;
      padding-top: 7px;
      height: 65px;
    }
  }
  @media (max-width: 600px) {
    div.item {
      flex-direction: row !important;
      padding-left: 15% !important;
      padding-top: 7px;
      height: 50px !important;
    }
  }
`;

// "comma-dangle": [
//   "error",
//   {
//       "arrays": "always-multiline",
//       "objects": "never",
//       "imports": "always-multiline",
//       "exports": "always-multiline",
//       "functions": "never"

//             }
//         ],
// const SideBarStyle = styled.div`
//   /* Side Nav */
//   /* Side Nav */

//   position: absolute;
//   width: 196px;
//   height: 1027px;
//   left: 0px;
//   top: 141px;

//   /* Secondary */
//   background: #eef1f4;

//   /* Menus */

//   /* Auto layout */
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 165.05px;
//   height: 392px;
//   left: 15.47px;
//   top: 18px;

//   /* Menu */

//   width: 165.05px;
//   height: 52px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* BG */

//   position: absolute;
//   width: 165.05px;
//   height: 52px;
//   left: 0px;
//   top: -1px;

//   border-radius: 8px;

//   /* Item */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 82px;
//   height: 24px;
//   left: 28px;
//   top: 15px;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 0%;
//   bottom: 0%;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 12.5%;
//   bottom: 12.5%;

//   background: #000000;

//   /* Home */

//   width: 42px;
//   height: 22px;

//   font-family: "Source Sans Pro";
//   font-style: normal;
//   font-weight: 900;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: rgba(0, 0, 0, 0.9);

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   width: 165.05px;
//   height: 52px;

//   border-radius: 4px;

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* BG */

//   position: absolute;
//   visibility: hidden;
//   width: 165.05px;
//   height: 52px;
//   left: 0px;
//   top: -1px;

//   /* White */
//   background: #ffffff;
//   border-radius: 8px;

//   /* Item */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 121px;
//   height: 24px;
//   left: 28px;
//   top: 15px;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 8.33%;
//   right: 8.33%;
//   top: 16.67%;
//   bottom: 16.67%;

//   border: 2px solid #000000;

//   /* Employees */

//   width: 81px;
//   height: 22px;

//   font-family: "Source Sans Pro";
//   font-style: normal;
//   font-weight: 900;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: rgba(0, 0, 0, 0.9);

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   width: 165.05px;
//   height: 52px;

//   background: #ffffff;

//   /* Inside auto layout */
//   flex: none;
//   order: 2;
//   flex-grow: 0;

//   /* BG */

//   position: absolute;
//   visibility: hidden;
//   width: 165.05px;
//   height: 52px;
//   left: 0px;
//   top: -1px;

//   /* White */
//   background: #ffffff;
//   border-radius: 8px;

//   /* Item */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 77px;
//   height: 24px;
//   left: 28px;
//   top: 15px;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 20.83%;
//   right: 20.83%;
//   top: 12.5%;
//   bottom: 12.5%;

//   border: 2px solid #000000;

//   /* Posts */

//   width: 37px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: rgba(0, 0, 0, 0.9);

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   width: 165.05px;
//   height: 52px;

//   /* Inside auto layout */
//   flex: none;
//   order: 3;
//   flex-grow: 0;

//   /* BG */

//   position: absolute;
//   visibility: hidden;
//   width: 165.05px;
//   height: 52px;
//   left: 0px;
//   top: -1px;

//   /* White */
//   background: #ffffff;
//   border-radius: 8px;

//   /* Item */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 116px;
//   height: 24px;
//   left: 28px;
//   top: 15px;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 12.5%;
//   bottom: 12.5%;

//   border: 2px solid #000000;

//   /* Categories */

//   width: 76px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: rgba(0, 0, 0, 0.9);

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   width: 165.05px;
//   height: 52px;

//   /* Inside auto layout */
//   flex: none;
//   order: 4;
//   flex-grow: 0;

//   /* BG */

//   position: absolute;
//   visibility: hidden;
//   width: 165.05px;
//   height: 52px;
//   left: 0px;
//   top: -1px;

//   /* White */
//   background: #ffffff;
//   border-radius: 8px;

//   /* Item */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 95px;
//   height: 24px;
//   left: 28px;
//   top: 15px;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 0%;
//   bottom: 0%;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 8.33%;
//   bottom: 8.33%;

//   background: #000000;

//   /* Reports */

//   width: 55px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: rgba(0, 0, 0, 0.9);

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   width: 165.05px;
//   height: 52px;

//   /* Inside auto layout */
//   flex: none;
//   order: 5;
//   flex-grow: 0;

//   /* BG */

//   position: absolute;
//   visibility: hidden;
//   width: 165.05px;
//   height: 52px;
//   left: 0px;
//   top: -1px;

//   /* White */
//   background: #ffffff;
//   border-radius: 8px;

//   /* Item */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 16px;

//   position: absolute;
//   width: 78px;
//   height: 24px;
//   left: 28px;
//   top: 15px;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 12.5%;
//   bottom: 12.5%;

//   border: 2px solid #000000;

//   /* More */

//   width: 38px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: rgba(0, 0, 0, 0.9);

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Bottom */

//   /* Auto layout */
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 0px;
//   gap: 24px;

//   position: absolute;
//   width: 97px;
//   height: 120px;
//   left: 44.47px;
//   top: 539px;

//   /* Menu */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   padding: 0px;
//   gap: 16px;

//   width: 97px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 12.5%;
//   bottom: 12.5%;

//   border: 2px solid #000000;

//   /* Vector */

//   position: absolute;
//   left: 37.5%;
//   right: 37.5%;
//   top: 37.5%;
//   bottom: 37.5%;

//   border: 2px solid #000000;

//   /* Settings */

//   width: 57px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: #000000;

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   padding: 0px;
//   gap: 16px;

//   width: 74px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 12.5%;
//   bottom: 12.5%;

//   border: 2px solid #000000;

//   /* Help */

//   width: 34px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: #000000;

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Menu */

//   /* Auto layout */
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   padding: 0px;
//   gap: 16px;

//   width: 90px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 2;
//   flex-grow: 0;

//   /* Frame */

//   width: 24px;
//   height: 24px;

//   /* Inside auto layout */
//   flex: none;
//   order: 0;
//   flex-grow: 0;

//   /* Vector */

//   position: absolute;
//   left: 12.5%;
//   right: 12.5%;
//   top: 16.67%;
//   bottom: 16.67%;

//   border: 2px solid #000000;

//   /* Logout */

//   width: 50px;
//   height: 22px;

//   font-family: "Avenir";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 22px;
//   /* identical to box height, or 138% */
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.02em;
//   font-feature-settings: "calt" off;

//   color: #000000;

//   /* Inside auto layout */
//   flex: none;
//   order: 1;
//   flex-grow: 0;

//   /* Div */

//   position: absolute;
//   width: 195.5px;
//   height: 0px;
//   left: 0.5px;
//   top: 501.04px;

//   opacity: 0.4;
//   border: 0.5px solid #000000;
// `;

export default SideBarStyle;
