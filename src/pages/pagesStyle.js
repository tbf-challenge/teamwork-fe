import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  .pages {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 20% 79%;
    grid-gap: 0.3em;
    min-height: 90vh;
    margin-top: -6px;
    height: 91vh;
    overflow-y: hidden;

    .sidebar {
      padding: 20px 15px;
      background: #ffffff;
      z-index: 100;
    }

    .outlet {
      padding: 20px 20px 0;
      overflow-x: hidden;
      overflow-y: scroll;
      height: 99%;

      /* styling the scrollbar */

      ::-webkit-scrollbar {
        height: 5px;
        width: 8px;
        background: #7fc6fd;
      }

      ::-webkit-scrollbar-thumb {
        background: blue;
        border-radius: 1ex;
        -webkit-border-radius: 1ex;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
      }

      ::-webkit-scrollbar-corner {
        background: #000;
      }

      @media (max-width: 1024px) {
        ::-webkit-scrollbar {
          height: 5px;
          width: 5px;
          background: #7fc6fd;
        }
      }

      @media (max-width: 800px) {
        ::-webkit-scrollbar {
          height: 5px;
          width: 3px;
          background: #7fc6fd;
        }
      }

      @media (max-width: 600px) {
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }

    @media screen and (max-width: 600px) {
      display: grid;
      /* justify-items: center; */
      grid-template-columns: 100%;
      justify-content: center;
      width: 100%;
      padding: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    width: 100%;

    .pages {
      grid-template-columns: 100% 0%;
    }

    .outlet {
      padding: 0 !important;
      max-height: max-content;
    }

    .sidebar {
      border-left: 1px solid black;
      position: fixed;
      left: 0;
      top: 50px;
      bottom: 0;
      overflow-y: scroll;
      width: 180px;
      overflow-x: none;
      padding-right: 0;
      transition: 0.7s;
      transform: translateX(-200px);
    }
    .toggleOn {
      transform: translateX(0px);
    }
    .rotateOn {
      transform: rotate(90deg);
    }
  }
`;

export default PagesStyle;
