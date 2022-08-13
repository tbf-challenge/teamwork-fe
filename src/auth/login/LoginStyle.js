import styled from "styled-components";
// import img1 from "../../Assets/images/image 1.png";

const LoginContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@100;400;700&family=Bellefair&display=swap");
  display: flex;
  justify-content: space-between;
  font-family: "Rounded Mplus 1c", "Barlow", sans-serif;
  color: #7d7d7d;
  .info {
    margin: 100px;
    margin-right: 50px;
    align-items: center;
  }

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
    width: 150%;
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
  

  
    @media (max-width: 780px) {
      .img1 {
        width:80%;
        height: 100%;
       margin-left:50px;
      }
      h1{
        font-size: 21px;
      }
      #btn{
        padding: 10px 0px;
      }
    }
  
    @media (max-width: 480px) {
      flex-direction: column-reverse;
      .img1 {
        margin-right:50px;
      }
      .info {
        margin-bottom: 30px;
      }
  
      input {
        width: 100%;
      }
      #btn{
        margin-right: 30px;
        margin-bottom: 20px;
        
      }
    }

`;
export default LoginContainer;
