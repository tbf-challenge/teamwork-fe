import styled from "styled-components";

const ToggleBtnContainer = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 30px;
  /* background-color: gray; */

  input#toggle {
    display: none;
    background-color: #ffffff;
    border-radius: 30px;
  }

  label {
    cursor: pointer;
    color: white;

    #labelDiv {
      font-weight: 1000;
      width: 100%;
      height: 100%;
      user-select: none;
      background-color: ${({ isGrid }) => (isGrid ? "black" : "rgba(0, 0, 0, 0.2)")};
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition : all .4s;
    }
  }
`;
export default ToggleBtnContainer;
