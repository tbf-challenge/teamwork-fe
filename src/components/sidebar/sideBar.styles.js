import styled from "styled-components";

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vh;
  min-height: 85vh;
  justify-content: space-between;
  /* background-color: red; */
  transition: all 0.2s ease-in-out;
  flex: 1;

  li {
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: #9ca3af;
  }

  .logout {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  .item {
    display: flex;
    justify-content: start;
    padding-left: 20px;
    align-items: center;
    list-style-type: none;
    gap: 10px;
    height: 50px;
    margin-bottom: 3px;
    transition: all 0.2s ease-in-out;

    svg {
      width: 24px;
      height: 24px;
      color: #9ca3af;
    }

    @media screen and (max-width: 1100px) {
      div.item {
        padding-left: 5px;
        gap: 6px;
      }
    }
  }

  button {
    background: none;
    outline: none;
    cursor: pointer;
  }

  /* .first-list {
    margin-bottom: auto;
  } */

  .second-list {
    padding-top: 5vh;
    padding-bottom: 5vh;
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

  @media screen and (max-width: 1100px) {
    .item {
      padding-left: 8px;
      gap: 6px;
    }

    li {
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
    div.item {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;
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

export default SideBarStyle;
