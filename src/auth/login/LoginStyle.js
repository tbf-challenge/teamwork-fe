import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../Assets/images/sign-in-bg.jpg";

const Styled = {
  Container: styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  font-family: var(--Base-Family);
  `,

  Row: styled.div`
  position: relative;
  height: 100%;
  
  @media(min-width: 578px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  `,

  ColForm: styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media(min-width: 578px) {
    grid-row: 1;
    justify-content: center;
    gap: 16px;
    max-width: 480px;
    margin: auto;
  }
  `,

  ColBackground: styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(77,77,77,0.35) url(${backgroundImage}) 60% 100%/cover no-repeat;
  background-blend-mode: multiply;

  @media(min-width: 578px) {
    position: relative;
    grid-column: 2;
  }
  `,

  Heading: styled.h1`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  color: var(--Pure-White);
  font-size: 36px;
  font-weight: bold;

  @media(max-height: 700px) {
    height: 35%;
  }

  @media(min-width: 578px) {
    height: 35%;
    padding-left: unset;
    justify-content: flex-end;
    color: var(--Pure-Black);
    padding: 0 16px;
  }
  `,

  FormWrapper: styled.div`
  flex-grow: 1;
  width: 90%;
  margin: auto;
  background-color: var(--Pure-White);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 38px 16px 0 16px;

  @media(min-width: 578px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  `,

  Form: styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  `,

  FormGroup: styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  `,

  FormLabel: styled.label`
  font-size: 14px;
  line-height: 20px;
  `,

  FormInputGroup: styled.div`
  border: thin solid var(--Gray-Color-300);
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  `,

  FormInput: styled.input`
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  color: thin solid var(--Text-Header-Color);
  outline: none;
  `,

  FormError: styled.span`
  font-size: 12px;
  color: var(--Error-Color);
  `,

  Typography: {
    Link: styled(Link)`
    font-size: 14px;
    line-height: 20px;
    margin-left: auto;
    `
  }
};

export default Styled;
