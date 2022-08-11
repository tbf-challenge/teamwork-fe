import styled from "styled-components";

const ButtonStyle = styled.div`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 4px;
  cursor: pointer;
  
  button {
    height: 100%;
    width: 100%;
    line-height: ${(props) => props.lineHeight};
    background-color: ${(props) => props.bgColor};
    width: 100%;
    border-radius: 4px;
    border: ${(props) => props.border};
    cursor: pointer;
    font-size: ${(props) => props.fontSize};
    font-weight: 600;
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
  }

  .imgLeft {
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
  }

  .imgRight {
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
  }
  /* &:hover {
    background-color: ${(props) => props.bgHover || props.bgColor};
    color: ${(props) => props.colorHover || props.color};
  }

  &:active {
    background-color: ${(props) => props.bgActive || props.bgColor};
    color: ${(props) => props.colorActive || props.color};
  }

  &:disabled {
    background-color: ${(props) => props.bgDisabled || props.bgColor};
    color: ${(props) => props.colorDisabled || props.color};
  } */
`;

export default ButtonStyle;
