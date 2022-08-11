import styled from "styled-components";
// import img1 from "../../Assets/images/image 1.png";

const LoginContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@100;400;700&family=Bellefair&display=swap");
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  font-family: "Rounded Mplus 1c", "Barlow", sans-serif;
  color: #7d7d7d;

  @media screen and (max-width: 600px) {
  }

  .info {
    box-sizing:border-box;
    margin: 100px;
    margin-right: 50px;
    align-items: center;
    width: 100%;
    background-color:red;

    h1 {
      font-weight: bold;
      margin-top: 80px;
    }
    p {
      margin-top: 8px;
      font-size: 20px;
    }
    #ValidateForm {
      display: block;
      margin-top: 35px;
    }
    input {
      border: 1px solid #b9b6d3;
      padding: 15px;
      width: 80%;
      padding-left: 50px;
    }
    .lock {
      position: absolute;
      padding: 10px 0 0 15px;
    }
    .user {
      position: absolute;
      padding: 10px 0 0 15px;
    }

    .btn {
      text-align: center;
      margin-left: 50px;
    }

    #btn {
      padding: 10px 30px;
      background-color: #1678f3;
      color: white;
      border: none;
      width: 50%;
      margin-top: 25px;
      margin-left: 30px;
    }
    .error-block {
      color: red;
      text-align: end;
      margin-bottom: 5px;
    }
  }

  .image {
    background-image: url(${process.env.PUBLIC_URL}/bg.png);
    /* background-size: 500px; */
    /* background-repeat: repeat; */
    display: grid;
    place-items: center;
    /* place-content: center; */

    .img1 {
      width: 50%;
      height: 60%;
      margin-left: 50px;
    }
  }

  @media (max-width: 780px) {
    .image {
      .img1 {
        width: 80%;
        height: 100%;
        margin-left: 50px;
      }
    }
    h1 {
      font-size: 21px;
    }
    #btn {
      padding: 10px 0px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;

    .image {
      .img1 {
        margin-right: 50px;
      }
    }
    .info {
      margin-bottom: 30px;
    }

    input {
      width: 100%;
    }
    #btn {
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
`;
export default LoginContainer;
