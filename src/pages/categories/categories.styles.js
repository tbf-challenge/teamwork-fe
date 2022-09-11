import styled from "styled-components";

export const CategoriesStyles = styled.section`
  width: 377px;
  height: 1898px;
  margin-top: 23px;
  background: #ffffff;
  /* overflow-y: scroll; */
  /* background-color:red; */
`;

export const Topbar = styled.nav`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  width: 375px;
  height: 46px;
  margin-top: 16px;
  background: #ffffff;
  border-bottom: 0.5px solid #d2d5da;
  padding: 12px 16px 0px 8px;
  gap: 8px;
  justify-content: space-between;

  a {
    color: inherit;
  }

  @media screen and (min-width: 768px) {
    width: 527px;
    height: 46px;
    padding: 12px 16px 0px 8px;
  }

  @media screen and (min-width: 1024px) {
    width: 742px;
    height: 46px;
    padding: 12px 16px 0px 8px;
  }
`;
export const Nav = styled.a`
  text-decoration: none;
  width: 16px;
  height: 20px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;
`;
export const Nav2 = styled.a`
  text-decoration: none;
  width: 58px;
  height: 20px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;
`;
export const Nav3 = styled.a`
  text-decoration: none;
  width: 37px;
  height: 20px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;
`;
export const HomeStyles = styled.section`
  width: 377px;
  height: 1908px;
  background: #ffffff;
  border-width: 0px 0.5px;
  border-style: solid;
  border-color: #d2d5da;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 2684px;
  }

  @media screen and (min-width: 1024px) {
    width: 766px;
    height: 2913px;
  }
`;

export const SecondDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 356px;
  border-bottom: 0.5px solid #d2d5da;
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 488px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 742px;
    height: 544px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }
`;
export const ThirdDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 354px;
  border-bottom: 0.5px solid #d2d5da;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 504px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 742px;
    height: 552px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }
`;
export const FourthDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 376px;
  border-bottom: 0.5px solid #d2d5da;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 532px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 766px;
    height: 584px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }
`;

export const FifthDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 377px;
  height: 356px;
  border-bottom: 0.5px solid #d2d5da;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 488px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 742px;
    height: 544px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }
`;
export const SixthDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 354px;
  border-bottom: 0.5px solid #d2d5da;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 528px;
    height: 480px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px) {
    width: 742px;
    height: 552px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }
`;
export const H1 = styled.div`
  width: 345px;
  height: 22px;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  margin-top: 12px;
  color: #1f2937;
`;
export const H2 = styled.h2`
  width: 345px;
  height: 44px;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #1f2937;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 56px;
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px) {
    width: 718px;
    height: 64px;
    font-size: 24px;
    line-height: 32px;
  }
`;
export const H3 = styled.div`
  width: 136px;
  height: 24px;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1f2937;
`;
export const H4 = styled.h4`
  width: 345px;
  height: 22px;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #1f2937;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 28px;
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px) {
    width: 694px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
  }
`;
export const Span = styled.span`
  width: 59px;
  height: 20px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;
  margin-left: -15px;
`;
export const Span2 = styled.span`
  width: 40px;
  height: 24px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
  margin-left: -30px;
`;
export const Span3 = styled.span`
  width: 44px;
  height: 24px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
  margin-left: -38px;
`;
export const Span4 = styled.span`
  width: 81px;
  height: 24px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
  margin-left: -40px;
`;
export const Span5 = styled.span`
  width: 44px;
  height: 24px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
  margin-left: -70px;
`;
export const Paragraph = styled.div`
  width: 343px;
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

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 28px;
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px) {
    width: 718px;
  }
`;

export const PmPost = styled.p`
  width: 345px;
  height: 40px;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 718px;
  }

  .dele-text {
    background-color: red;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 343px;
  height: 40px;
  margin-top: 23px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 48px;
  }

  @media screen and (min-width: 1024px) {
    width: 718px;
    height: 52px;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
export const SecondImage = styled.div`
  .second-img {
    width: 246px;
    height: 150px;
    margin-left: 49px;
    margin-top: 21px;

    @media screen and (min-width: 768px) {
      width: 395.79px;
      height: 241.33px;
      margin-left: 62px;
      margin-top: 55px;
    }

    @media screen and (min-width: 1024px) {
      width: 463.57px;
      height: 282.67px;
      margin-left: 123px;
      margin-top: 18.67px;
    }
  }

  .third-img {
    width: 343px;
    height: 160px;
    border-radius: 8px;
    margin-top: 23px;

    @media screen and (min-width: 768px) {
      width: 480px;
      height: 280px;
      border-radius: 16px;
    }

    @media screen and (min-width: 1024px) {
      width: 718px;
      height: 320px;
    }
  }

  .fourth-img {
    width: 343px;
    height: 220px;
    margin-top: 8px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
      width: 480px;
      height: 320px;
      margin-top: 8px;
    }

    @media screen and (min-width: 1024px) {
      width: 694px;
      height: 372px;
      margin-top: 8px;
    }
  }

  .fifth-img {
    width: 343px;
    height: 160px;
    border-radius: 8px;
    margin-top: 10px;

    @media screen and (min-width: 768px) {
      width: 480px;
      height: 280px;
      margin-top: 5px;
    }

    @media screen and (min-width: 1024px) {
      width: 718px;
      height: 320px;
    }
  }
`;
export const Image = styled.div`
  .img {
    width: 343px;
    height: 220px;
    margin-top: 8px;
  }

  @media screen and (min-width: 768px) {
    .img {
      width: 480px;
      height: 320px;
      margin-top: 8px;
    }
  }

  @media screen and (min-width: 1024px) {
    .img {
      width: 694px;
      height: 372px;
      margin-top: 8px;
    }
  }
`;
export const BottomWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 343px;
  height: 28px;
  margin-top: 20.4px;
  margin-bottom: 36px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 28px;
  }

  @media screen and (min-width: 1024px) {
    width: 718px;
    height: 28px;
  }

  .container {
    display: flex;
    gap: 20px;

    @media screen and (min-width: 768px) {
      gap: 28px;
    }
  }

  .btn-img {
    display: flex;
    align-items: center;
    gap: 2px;
  }
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
`;
