import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  .pages {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 0.3em;
    min-height: 90vh;
    /* background-color: yellow; */

    .sidebar {
      padding: 20px 10px;
      padding-right: 15px;
      background: #eef1f4;
    }

    .outlet {
      padding: 20px;
    }
  }

  @media screen and (max-width: 1025px) {
  }

  @media screen and (max-width: 800px) {
    .pages {
      display: inline;
      min-height: 90vh;
      position: relative;

      /* background-color: yellow; */

      .sidebar {
        padding: 20px 10px;
        padding-right: 15px;
        background: #eef1f4;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 40%;
        z-index: -2;
      }

      .sidebar_open {
        left: 40%;
      }

      .outlet {
        padding: 20px;
      }
    }
  }
`;

export default PagesStyle;
