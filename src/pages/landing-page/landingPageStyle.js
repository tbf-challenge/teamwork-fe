import styled from "styled-components";

const LandingPageConatainer = styled.section`
  .container {
    // width: 100%;
    background: #ffffff;
  }
  //   header {
  //     box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
  //   }
  .header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    margin: 40px;
  }
  .btn {
    background-color: #1678f3;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    font-size: 16px;
    width: 215px;
    height: 56px;
    
    
  }
  .heading {
    position: absolute;
    left: 100px;
    top: 200px;
  }
  .heading p {
    color: #1678f3;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
  }

  .heading h1 {
    font-weight: 700;
    font-size: 52px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #111827;
  }
  .landing {
    width: 100%;
    height: 100%;
  }
  .design {
    margin: 50px;
  }
  .frame {
    width: 100%;
    height: 100%;
    margin: 50px;
  }
  footer {
    background-color: #000000;
    height: 112px;
  }
  .text {
    display: flex;
    color: #ffffff;
    justify-content: space-evenly;
    padding-top: 50px;
  }
`;

export default LandingPageConatainer;
