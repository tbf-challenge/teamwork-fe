import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  background-color: white;
  height: 100%;

  .pages {
    box-sizing: border-box;
    display: flex;
    grid-gap: 0.1em;
    height: 91vh;
    overflow-y: hidden;
    justify-content: flex-end;
    /* grid-template-columns: 14% 85%; */
    /* min-height: 100%; */

    .sidebar {
      padding: 20px 15px;
      background: #ffffff;
      z-index: 100;
      max-width: 200px;
      width: 15vw;
      transition: 0.05s ease-in-out;

      @media screen and (max-width: 1100px) {
        display: flex;
        justify-content: center;
        padding: 20px 3px;

        @media screen and (max-width: 600px) {
          box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: start;
          background-color: white;
          overflow: hidden;
          border-left: 1px solid black;
          position: absolute;
          left: -100%;
          top: 50px;
          bottom: 0;
          overflow-y: scroll;
          width: 50vw;
          overflow-x: none;
          padding-right: 0;
          /* transform: translateX(-200px); */
        }
      }
    }

    .outlet {
      padding: 20px 1% 0px;
      padding-right: 5px;
      height: 100%;
      overflow: hidden;
      flex: 1;

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

    &&& {
      .toggleOn {
        left: -1px;
      }
    }

    /* 
      In Normal CSS you use ( !important )
      but in styled components, you can use either ( !important )
      or put the style in three amber signs ( & )

      like this 
      (
        &&& {
          ...your style, example shown above with toggle on
        }
      )

      CSS normal method to over-rida any other styling
      .toggleOn {
        left: -1px !important;
      }
    */

    .rotateOn {
      transform: rotate(90deg);
      /* New method of rotating but not working here for transition effect reason unknown to me */
      /* rotate: 90deg; */
      /* New method of rotating but not working here for transition effect */
    }
  }
`;

export default PagesStyle;
