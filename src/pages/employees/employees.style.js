import styled from "styled-components";

export const EmployeesContainer = styled.section`
  width: 100%;
  height: max-height;
  display: flex;
  flex-direction: column;
//   background-color:white;
  overflow: scroll hidden;
  /* align-items: center; */

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    /* background-color: blue; */

    #createBtn {
      padding: 10px 15px;
      border-radius: 7px;
      background-color: black;
      color: #fff;
      font-weight: 1000;
      cursor: pointer;
    }
  }

  h1 {
    margin: 0 0 10px 4%;
    font-size: 1.8em;
  }
`;
export const EmployeesWrapper = styled.div`
  background-color: #eef1f4;
  width: 90%;
  height: max-height;
  margin: 30px 0 50px 8%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 70px;
  }
  .rowDiv {
    display: flex;
    width: 95%;
    justify-content: space-between;
  }
  .inputBox {
    border: 1px solid #000000;
    border-radius: 4px;
    margin: 12px 0 12px 0;
    width: 100%;
    height: 48px;
  }
  .inputDiv {
    width: 48%;
  }
  .inputRegister {
    border: 1px solid #000000;
    border-radius: 6px;
    margin: 12px 0 20px 0;
    height: 48px;
    width: 95%;
  }
  .submitButton {
    width: 15%;
    height: 40px;
    background-color: #000000;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 30px 5% 50px 0;
    align-self: flex-end;
    &:hover {
      background-color: white;
      color: #000000;
      border: 1px solid #000000;
    }
  }
  label {
    padding-bottom: 12px;
  }
  .radioDiv {
    margin: 10px 0 10px 0;
  }
  .radio {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    margin: 10px 0 0 0;
  }
  .radioInput {
    margin: 10px 0 0 0;
  }
  @media screen and (max-width: 426px) {
    margin: 10px 0 50px 5%;
    .rowDiv {
      display: flex;
      flex-direction: column;
    }
    .inputDiv {
      width: 100%;
    }
    form {
      margin: 20px 0 0 5%;
    }
    .submitButton {
      margin: 10px 5% 50px 0;
    }
    .radio {
      width: 50%;
    }
  }
  @media screen and (max-width: 769px) {
    margin: 30px 0 50px 5%;
    .submitButton {
      width: 42%;
    }
  }
`;

export const AllEmployeesContainer = styled.div`
  list-style-type: none;
  background-color: #d2d5da;
  overflow: scroll hidden;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: column;
    min-width: 800px;

    .grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr 80px 0.2fr;

      li {
        display: flex;
        justify-content: center;
        overflow-x: hidden;
      }
    }

    .headers {
      font-weight: 800;
      font-size: 20px;
      margin: 10px 0;

      .header_title {
        display: flex;
        padding-left: 5px;
        justify-content: center;
      }
    }

    .body {
      .body_title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
      }

      :nth-child(odd) {
        background-color: #fff;
      }

      .full_name {
        padding-left: 10%;
        display: flex;
        justify-content: start;

        img {
          margin-right: 5%;
        }
      }
    }
  }

  /* @media screen and (max-width: 600px) {
    width: 95%;
  } */
`;
