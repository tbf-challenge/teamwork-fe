import styled from "styled-components";

const SettingsStyles = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 36px;
  align-items: flex-start;
  padding-top: 60px;
  
  .pageTitle {
    position: absolute;
    top: 20px;
    left: 10px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    color: #1F2937;
  }

  .mainSettings {
    transition: all 500ms ease-in-out;
  }

  @media(max-width: 1024px) {
    grid-column-gap: 24px;
  }

  @media(max-width: 850px) {
    grid-template-columns: 1fr 4fr;
  }

  @media(max-width: 650px) {
    grid-column-gap: 18px;
    grid-template-columns: 1fr 8fr;
  }

  @media(max-width: 480px) {
    grid-gap: 0;
    grid-template-columns: 100%;
    width: 100% !important;
  }
`;

export const ProfileSettings = {
  Container: styled.section`
    width: 100%;
    padding: 0 5% 80px 4.7%;
    transition: all 500ms ease-in-out;

    @media screen and (max-width: 480px) {
      padding: 0 5% 50px;
    }
  `,

  Heading: styled.header`
    width: 100%;
    margin-bottom: 40px;
    
    h5 {
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
      margin-bottom: 8px;
      color: #1F2937;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #4B5563;
    }

    @media(max-width: 1024px) {
      h5 {
        font-size: 20px;
        line-height: 28px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
    
    @media(max-width: 480px) {
      p {
        font-size: 12px;
      }
    }

  `,

  Info: styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h4 {
      font-size: 18px;
      line-height: 28px;
      color: #1F2937;
      font-weight: 600;
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      font-size: 20px;
      font-weight: 600;
      color: #1678F3;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
      }
    }

    @media(max-width:1024px) {
      h4 {
        font-size: 16px;
        line-height: 24px;
      }
      button {
        font-size: 18px;
      }
    }

    @media(max-width:1024px) {
      button {
        font-size: 16px;
      }
    }
  `,

  InputGroup: styled.div`
    width: 100%;
    margin-bottom: 28px;

    label {
      font-size: 14px;
      line-height: 20px;
      color: #4B5563;
      margin-bottom: 4px;
      display: block;
    }

    input {
      border: 1px solid #D2D5DA;
      border-radius: 4px;
      font-size: 16px;
      color: #1F2937;
      padding: 10px 12px;
      width: 100%;
      outline: none;
    }

    div {
      position: relative;
    }

    #emailIcon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 2%;
    }
    .checkMark {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2%;
      transition: all ease-in-out 500ms;
    }
    .hidden {
      visibility: hidden;
    }
    #email {
      padding: 10px 44px;
    }
  `,

  Button: styled.button`
    display: ${(props) => props.displayBtn};
    background-color: #1678F3;
    text-align: center;
    width: 100%;
    border-radius: 4px;
    border: none;
    color: #ffffff;
    font-size: 16px;
    padding: 16px 0;
    margin-top: 8px;
    cursor: pointer;

    &.disabled {
      background-color: #F3F4F6;
      color: #D2D5DA;
    }
  `
};

export default SettingsStyles;
