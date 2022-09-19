import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  .pages {
    display: grid;
    grid-template-columns: 20% 79%;
    grid-gap: 0.3em;
    min-height: 90vh;
    margin-top: -6px;

    .sidebar {
      padding: 20px 15px;
      background: #ffffff;
      z-index: 100;
    }

    .outlet {
      padding: 20px;
    }

    /* @media (max-width: 600px) {

  } */
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    width: 100%;

    .pages {
      grid-template-columns: 100% 0%;
    }

    .outlet {
      padding: 0 !important;
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
