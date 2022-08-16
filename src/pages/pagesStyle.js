import styled from "styled-components";

// const show = true;

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  .pages {
    display: grid;
    grid-template-columns: 20% 79%;
    grid-gap: 0.3em;
    // max-width: 100%
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

    

    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: 100%;
      justify-content: center;
      width: 100%;
      background-color: yellow;
      /* overflow: hidden; */

      .outlet {
        padding: 12px;
      }
    }
  }

  @media (max-width: 600px) {
    .sidebar {
      border-left: 1px solid black;
      position: fixed;
      right: 0;
      top: 50px;
      bottom: 0;
      overflow-y: scroll;
      width: 180px;
      overflow-x: none;
      padding-right: 0;
      transition: 0.7s;
      transform: translateX(200px);
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
