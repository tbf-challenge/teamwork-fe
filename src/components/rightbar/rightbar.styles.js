import styled from "styled-components";

const RightContainer = styled.section`
display : none;
@media screen and (min-width: 1024px){
    display: block;
    width: 260px;
    height: 540px;
    margin-left: 792px;
    margin-top: -2913px;
    border: 1px solid #E8F2FE;
    border-radius: 12px;

    .title {
        width: 90px;
        height: 24px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #4B5563; 
        padding: 12px 20px;
    }

    .wrapper {
        width: 259px;
        height: 436px;
        gap: 12px;
        margin-top: 23px;
        display: flex;
        flex-direction: column;
    }

    .post {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 4px 24px;
        width: 259px;
        height: 52px;
        border-bottom: 0.5px solid #F9FAFB;
        border-radius: 8px;
    }

    .post h1 {
        font-family: 'Open Sans';
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #4B5563;
        width: 68px;
        height: 24px;

    }

    .post p {
        width: 75px;
        height: 20px;   
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #4B5563;

    }
  }

  /* @media screen and (min-width: 768px){
    width: 204px;
    height: 540px;
    margin-left: 792px;
    margin-top: -2684px;
    border: 1px solid #E8F2FE;
    border-radius: 12px;
  } */
`;
export default RightContainer;
