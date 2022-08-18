import styled from "styled-components";

const ToggleBtnContainer = styled.div`
  width: 70px;
  height: 30px;
  /* background-color: gray; */

  input#toggle {
    display: none;

    :checked {
      + label {
        background-color: red;

        #labelDiv {
          background-color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  label {
    cursor: pointer;
    color: white;

    #labelDiv {
      font-weight: 1000;
      width: 100%;
      height: 100%;
      user-select: none;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default ToggleBtnContainer;
