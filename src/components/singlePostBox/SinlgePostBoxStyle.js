import styled from "styled-components";

const SinglePostBoxStyles = {
  Main: styled.div`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      cursor: pointer;
    }

    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4% 3%;
    gap: 5px;
    border: 8px dashed darkblue;
    box-shadow: 1px 1px 50px 0 rgba(0, 0, 0, 0.05);
  `,

  Flex: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;

    @media screen and (min-width: 768px) {
      height: 48px;
    }

    @media screen and (min-width: 1024px) {
      height: 52px;
    }
  `,

  User: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
  `,

  H3: styled.div`
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1f2937;
  `,

  Span: styled.span`
    width: 59px;
    height: 20px;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4b5563;
    margin-left: 0px;
  `,

  Paragraph: styled.div`
    width: 100%;
    height: 20px;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1f2937;
    margin-top: 12px;
    display: flex;
    gap: 2px;

    .span {
      color: #1366cf;
    }

    @media screen and (min-width: 1024px) {
    }

    @media screen and (min-width: 768px) {
      height: 28px;
      font-size: 18px;
      line-height: 28px;
    }
  `,

  Image: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    /* border: 8px dashed gray; */

    .img {
      width: 100%;
      height: 203.31px;
    }

    @media screen and (min-width: 1024px) {
      .img {
        height: 337.87px;
      }
    }

    @media screen and (min-width: 768px) {
      .img {
        height: 276px;
      }
    }
  `,

  BottomWrapper: styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    margin-top: 20px;
    cursor: pointer;
    position: relative;

    .icons {
      display: flex;
      gap: 20px;

      @media screen and (min-width: 768px) {
        gap: 28px;
      }
    }

    .iconDiv {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .eventDiv {
      display: flex;
      align-items: center;
      gap: 4px;

      .event {
        background: #f3f4f6;
        border-radius: 17.9272px;
        width: 56px;
        height: 28px;
        padding: 4px 12px;
        font-family: "Open Sans";
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #1f2937;
      }
    }

    .pm {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .pm-pm {
      width: 19px;
      height: 20px;
      font-family: "Open Sans";
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #1f2937;
    }

    .pm-time {
      width: 63px;
      height: 20px;

      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #4b5563;
    }

    .pm-business {
      width: 50px;
      height: 20px;
      font-family: "Open Sans";
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #1f2937;
    }
  `,

  Div: styled.div``,

  Img: styled.img``,

  Options: styled.div`
    position: absolute;
    bottom: -130px;
    right: 10px;
    z-index: ${({ showOptions }) => (showOptions ? "5" : "-5")};
    background-color: #00000070;
    width: 160px;
    height: max-content;
    padding: 0;
    flex-direction: column;
    transition: .3s;
    display: ${({ showOptions }) => (showOptions ? "flex" : "none")};
    
    gap: 2px;
    
    li {
      background-color: lightgrey;
      list-style-type: none;
      width: 100%;
      padding: 10px;
      text-align: center;
    }
  `
};

export default SinglePostBoxStyles;
