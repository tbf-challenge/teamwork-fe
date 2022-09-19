import styled from "styled-components";

export const HomeStyles = styled.section`
  width: 377px;
  height: 1908px;
  background: #ffffff;
  border-width: 0px 0.5px;
  border-style: solid;
  border-color: #d2d5da;

  @media screen and (min-width: 768px){
    width: 528px;
    height: 2684px;
  }

  @media screen and (min-width: 1024px){
    width: 766px;
    height: 2913px;
  }
`;

export const FirstDiv = styled.div`
  width: 375px;
  height: 48px;
  border-bottom: 0.5px solid #E5E7EB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 8px;
  margin-top: 25px;

  .title{
  width: 46px;
  height: 22px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #1F2937;
  }

  @media screen and (min-width: 768px){
    display: none;
  }
`;

export const Button = styled.button`
  width: 103px;
  height: 40px;
  background: #1678F3;
  border-radius: 4px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`;

export const SecondDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 346px;
  border-bottom: 0.5px solid #D2D5DA;
  margin-top: 14px;

  @media screen and (min-width: 768px){
    width: 528px;
    height: 488px;
    padding: 0px 24px 24px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1024px){
    width: 766px;
    height: 544px;
    padding: 0px 24px 24px;
    margin-top: 7px;
  }

`;

export const ThirdDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 354px;
  border-bottom: 0.5px solid #D2D5DA;
  margin-top: 20px;

  @media screen and (min-width: 768px){
    width: 528px;
    height: 504px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px){
    width: 766px;
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
  border-bottom: 0.5px solid #D2D5DA;
  margin-top: 20px;

  @media screen and (min-width: 768px){
    width: 528px;
    height: 532px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px){
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
  height: 410px;
  border-bottom: 0.5px solid #D2D5DA;
  margin-top: 20px;

  @media screen and (min-width: 768px){
    width: 528px;
    height: 476px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px){
    width: 766px;
    height: 572px;
    padding: 0px 24px 24px;
    margin-top: 32px;
  }

`;
export const SixthDiv = styled.div`
  box-sizing: border-box;
  padding: 0px 16px 16px;
  width: 375px;
  height: 376px;
  border-bottom: 0.5px solid #D2D5DA;
  margin-top: 20px;

  @media screen and (min-width: 768px){
    width: 528px;
    height: 532px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px){
    width: 766px;
    height: 528px;
    padding: 0px 24px 16px;
    margin-top: 32px;
  }

`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 343px;
  height: 40px;

  @media screen and (min-width: 768px){
    width: 480px;
    height: 48px;
    
  }

  @media screen and (min-width: 1024px){
    width: 718px;
    height: 52px;
  }

  .user{
    display: flex;
    align-items: center;
    gap: 5px;
  }

  
`;

export const H3 = styled.div`
  width: 136px;
  height: 24px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1F2937;
`;

export const H2 = styled.h2`
  width: 345px;
  height: 44px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #1F2937;
  margin-top: 12px;

  @media screen and (min-width: 768px){
    width: 480px;
    height: 56px;
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px){
    width: 718px;
    height: 64px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Span = styled.span`
  width: 59px;
  height: 20px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4B5563;
  margin-left: -15px;
`;

export const Span2 = styled.span`
  width: 40px;
  height: 24px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4B5563;
  margin-left: -45px;
`;
export const Span3 = styled.span`
  width: 44px;
  height: 24px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4B5563;
  margin-left: -40px;
`;
export const Span4 = styled.span`
  width: 81px;
  height: 24px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4B5563;
  margin-left: -28px;
`;
export const Span5 = styled.span`
  width: 44px;
  height: 24px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4B5563;
  margin-left: -28px;
`;
export const Paragraph = styled.div`
  width: 343px;
  height: 20px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1F2937;
  margin-top: 12px;
  display: flex;
  gap: 2px;

  .span {
    color: #1366CF;
  }

  @media screen and (min-width: 768px){
    width: 480px;
    height: 28px;
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px){
    width: 718px;
  }
`;
export const Image = styled.div`
 
  .img{
    width: 203.31px;
    height: 203.31px;
    margin-top: 16.34px;
    margin-left: 69.84px;
  }

  @media screen and (min-width: 768px){
    .img{
    width: 276px;
    height: 276px;
    margin-top: 22px;
    margin-left: 103px;
  }
  }

  @media screen and (min-width: 1024px){
    .img{
    width: 337.87px;
    height: 337.87px;
    margin-top: 34px;
    margin-left: 208px;
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

    @media screen and (min-width: 768px){
    width: 480px;
    height: 28px;

    
  }

  @media screen and (min-width: 1024px){
    width: 718px;
    height: 28px;
    
  }

    .container{
      display: flex;
      gap: 20px;

    @media screen and (min-width: 768px){
    gap: 28px;
  }

    }

    .btn-img{
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .event{
      background: #F3F4F6;
      border-radius: 17.9272px;
      width: 56px;
      height: 28px;
      padding: 4px 12px;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #1F2937;

    }

    .pm{
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .pm-pm{
      width: 19px;
      height: 20px;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #1F2937;

    }

    .pm-time{
      width: 63px;
      height: 20px;

      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #4B5563;

    }

    .pm-business{
      width: 50px;
      height: 20px;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #1F2937;

    }
`;

export const Container = styled.div`
  


  @media screen and (min-width: 768px){
    
    
  }

`;

export const PM = styled.div`
  margin-top: 12px;

  @media screen and (min-width: 768px){
    width: 480px;
    height: 84px;
    
  }

  .pm-text {
    width: 345px;
    height: 22px;
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #1F2937;

    @media screen and (min-width: 768px){
    width: 480px;
    height: 28px;
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px){
    width: 718px;
    height: 32px;
    font-size: 24px;
    line-height: 32px;
  }
  }

  
`;
export const PmPost = styled.p`
  width: 345px;
  height: 40px;
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4B5563;
  margin-top: 8px;

  @media screen and (min-width: 768px){
    width: 480px;
    height: 48px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1024px){
    width: 718px;
  }
`;

export const SecondImage = styled.div`
  .second-img{
    width: 246px;
    height: 150px;
    margin-left: 49px;
    margin-top: 21px;

    @media screen and (min-width: 768px){
    width: 395.79px;
    height: 241.33px;
    margin-left: 62px;
    margin-top: 55px;
  }

  @media screen and (min-width: 1024px){
    width: 463.57px;
    height: 282.67px;
    margin-left: 123px;
    margin-top: 18.67px;
  }
  }

  .third-img{
    width: 343px;
    height: 160px;
    border-radius: 8px;
    margin-top: 16px;

    @media screen and (min-width: 768px){
    width: 480px;
    height: 280px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1024px){
    width: 718px;
    height: 320px;
  }
  }

  .fourth-img{
    width: 343px;
    height: 200px;

    @media screen and (min-width: 768px){
    width: 317px;
    height: 317px;
    margin-left: 80px;
    margin-top: -19px;
  }

  @media screen and (min-width: 1024px){
    width: 372px;
    height: 372px;
    margin-left: 161px;

  }
  }
  
`;
