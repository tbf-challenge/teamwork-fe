import styled from "styled-components";

const LandingPageConatainer = styled.section`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .container {
    background: #ffffff;
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: auto scroll;

    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      background: #7fc6fd;
    }

    ::-webkit-scrollbar-thumb {
      background: #1678f3;
      border-radius: 1ex;
      -webkit-border-radius: 1ex;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
    }

    ::-webkit-scrollbar-corner {
      background: #000;
    }

    @media only screen and (max-width: 400px) {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

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

      .logo {
        width: max-content;
        height: max-content;

        .img {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: max-content;
          height: max-content;
        }

        @media only screen and (max-width: 350px) {
          font-size: 11px;

          h4 {
            font-size: 9px;
          }

          h3 {
            font-size: 11px;
          }
        }
      }
    }
  }

  .btn {
    background-color: #1678f3;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    text-decoration: none;
    font-size: 1em;
    padding: 15px 20px;
    font-weight: 550;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      font-size: 13px;
      padding: 10px 12px;
    }

    @media only screen and (max-width: 350px) {
      font-size: 11px;
      padding: 8px 9px;
    }
  }

  .heading {
    padding: 10% 0;

    p {
      color: #1678f3;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      display: flex;
      white-space: nowrap;
    }

    h1 {
      font-weight: 700;
      font-size: 52px;
      line-height: 56px;
      letter-spacing: -0.02em;
      color: #111827;
      white-space: nowrap;
      transition: all 0.3s ease-out;
      /* font-size-adjust: 0.3; */
    }

    @media only screen and (max-width: 1025px) {
      p {
        font-size: 16px;
      }

      h1 {
        line-height: 1em;
        font-size: 2em;
      }
    }

    @media only screen and (max-width: 600px) {
      p {
        font-size: 14px;
      }

      h1 {
        font-size: 1.4em;
      }
    }

    @media only screen and (max-width: 450px) {
      p {
        font-size: 12px;
      }

      h1 {
        font-size: 1.1em;
      }
    }

    @media only screen and (max-width: 350px) {
      margin-top: 15px;
      p {
        font-size: 10px;
      }

      h1 {
        font-size: 0.8em;
      }
    }
  }

  .landingImage {
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: max-content;
      margin-top: -15%;
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
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

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
        padding: 9px;
        width: max-content;
        height: max-content;
      }

      .text {
        color: #ffffff;
        justify-content: space-evenly;
      }
    }

    @media only screen and (max-width: 400px) {
      .main {
        flex-direction: column;
      }
    }
  }
`;

export default LandingPageConatainer;

export const ImgDiv = styled.div`
  width: 25px;
  border: 5px solid #1678f3;
  height: 25px;
  border-radius: 50%;
  background-color: #1678f3;
`;
