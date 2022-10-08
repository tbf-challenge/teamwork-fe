import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  background-color: white;
  background-color: tomato;
  height: 100%;

  .pages {
    box-sizing: border-box;
    display: flex;
    grid-gap: 0.1em;
    height: 91vh;
    overflow-y: hidden;
    justify-content: flex-end;
    background-color: red;
    /* grid-template-columns: 14% 85%; */
    /* min-height: 100%; */

    .sidebar {
      padding: 20px 15px;
      background: #ffffff;
      z-index: 100;
      max-width: 200px;
      width: 15vw;
      /* background-color: green; */

      @media screen and (max-width: 1100px) {
        display: flex;
        justify-content: center;
        padding: 20px 3px;

        @media screen and (max-width: 600px) {
          display: flex;
          justify-content: start;
          background-color: red;
          width: 30vw;
          overflow: hidden;
          border-left: 1px solid black;
          position: fixed;
          left: 0;
          top: 50px;
          bottom: 0;
          overflow-y: scroll;
          width: 30vw;
          overflow-x: none;
          padding-right: 0;
          transition: 0.7s;
          transform: translateX(-200px);
        }
      }
    }

    .outlet {
      padding: 20px 1% 0px;
      padding-right: 5px;
      height: 100%;
      overflow: hidden;
      flex: 1;
      background-color: darkgoldenrod;

      /* styling the scrollbar */

      ::-webkit-scrollbar {
        display: none;
      }

      @media screen and (max-width: 1100px) {
        display: flex;
        justify-content: center;
      }

      @media screen and (max-width: 600px) {
        padding: 0 !important;
        max-height: max-content;
      }
    }

    @media screen and (max-width: 920px) {
      height: 94vh;
    }

    @media screen and (max-width: 600px) {
      display: grid;
      justify-items: center;
      grid-template-columns: 100%;
      justify-content: center;
      width: 100%;
      padding: 0;
      overflow-x: hidden;
    }
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    width: 100%;

    .toggleOn {
      transform: translateX(0px);
    }
    .rotateOn {
      transform: rotate(90deg);
    }
  }
`;

export default PagesStyle;
