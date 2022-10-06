import styled from "styled-components";

const CategoriesWidgetStyle = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  width: 100%;
  display: flex;
  padding: 5%;
  background-color: gray;

  .main {
    background-color: whitesmoke;
    width: 100%;

    .header {
      padding: 3% 9% 6%;
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

        .count {
          font-size: 0.9em;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;

export default CategoriesWidgetStyle;
