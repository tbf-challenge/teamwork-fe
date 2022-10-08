import styled from "styled-components";

const PageWrapperStyle = styled.div`
  display: grid;
  grid-template-columns: 8fr 3fr;
  width: 100%;
  height: 99%;
  background-color: blue;
  overflow: hidden hidden;

  .middlePage {
    background-color: transparent;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    /* height: 100%; */
    padding-bottom: 10%;

    /* styling the scrollbar */
    ::-webkit-scrollbar {
      height: 5px;
      width: 6px;
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
        width: 4px;
        background: #7fc6fd;
      }
    }

    @media (max-width: 800px) {
      ::-webkit-scrollbar {
        height: 5px;
        width: 2px;
        background: #7fc6fd;
      }
    }

    @media (max-width: 600px) {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  #widget {
    width: 100%;
    height: 100%;
    overflow: hidden hidden;
    /* background-color: red; */
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;

    .middlePage {
      background-color: yellow;
      width: 100%;
      /* height: max-content; */
    }

    #widget {
      height: max-content;
      align-self: flex-start;
      justify-self: start;
      /* display: none; */
    }
  }
`;

export default PageWrapperStyle;
