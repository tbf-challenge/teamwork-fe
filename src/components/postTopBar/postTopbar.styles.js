import styled from "styled-components";

const TopBar = styled.nav`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 37px;
  margin-top: 0px;
  background: #ffffff;
  border-bottom: 0.5px solid #d2d5da; 
  gap: 76px;

  a {
    color: inherit;
  }

  li {
    color: #1F2937;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 16px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: black;
    }
  }

  @media screen and (min-width: 768px) {
    height: 46px;
    padding: 12px 16px 0px 8px;
  }

`;

export default TopBar;
