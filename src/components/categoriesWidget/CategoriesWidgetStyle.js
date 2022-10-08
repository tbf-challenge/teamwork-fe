import styled from "styled-components";

const CategoriesWidgetStyle = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  padding: 5%;
  background-color: white;
  /* background-color: purple; */

  @media screen and (max-width: 800px) {
    height: fit-content;
    padding-left: 0;
    padding-right: 0;
    padding-top: 3px;
    /* padding-bottom: 3px; */
  }

  .main {
    background-color: whitesmoke;
    width: 100%;
    height: max-content;

    .header {
      padding: 3% 9% 20px;
    }

    .list {
      padding: 0.5% 10% 1%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .cat {
        display: flex;
        flex-direction: column;
        gap: 0;
        line-height: 1.3em;
        cursor: pointer;

        .count {
          font-size: 0.9em;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    @media screen and (max-width: 800px) {
      /* height: 300%; */

      .header {
        display: none;
      }

      .list {
        padding: 1%;
        flex-direction: row;
        width: 100%;
        max-width: 100%;
        overflow-y: hidden;
        overflow-x: scroll;
        justify-content: start;
        height: 99%;

        /* styling the scrollbar */

        ::-webkit-scrollbar {
          /* height: 5px; */
          /* width: 3px;
          background: #7fc6fd; */
          display: none;
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

        .cat {
          padding: 5px 2px;

          .count {
            display: none;
          }
        }
      }
    }
  }
`;

export default CategoriesWidgetStyle;
