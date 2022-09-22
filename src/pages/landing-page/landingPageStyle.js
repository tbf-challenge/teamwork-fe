import styled from "styled-components";

const LandingPageConatainer = styled.section`
  .container {
    // width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
  }
  //   header {
  //     box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
  //   }

  .header {
    display: flex;
    flex-direction: column;
    padding: 2% 5%;
    height: 50vh;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: fit-content;
      width: 100%;

      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border: 10px solid red;
        width: max-content;
        height: max-content;
      }
    }
  }

  .btn {
    width: 100%;
    height: 100%;

    background-color: #1678f3;
    /* background-color: rebeccapurple; */
    color: #ffffff;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    font-size: 16px;
    width: 215px;
    height: 56px;
    cursor: pointer;
  }

  .heading {
    padding: 10% 0;

    h1 {
      font-weight: 700;
      font-size: 52px;
      line-height: 56px;
      letter-spacing: -0.02em;
      color: #111827;
    }

    p {
      color: #1678f3;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      display: flex;
    }
  }

  .landingImage {
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: max-content;
      /* background-color: rebeccapurple; */
      margin-top: -10%;
    }
  }

  .design {
    margin: 50px;

    img {
      width: 100%;
    }
  }

  .frame {
    margin: -20% 50px 5%;

    img {
      width: 100%;
    }
  }

  footer {
    background-color: #000000;
    height: 90px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .main {
      width: 80%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 25%;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 900;
        gap: 5px;

        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: red;
        }
      }

      .text {
        color: #ffffff;
        justify-content: space-evenly;
      }
    }
  }
`;

export default LandingPageConatainer;
