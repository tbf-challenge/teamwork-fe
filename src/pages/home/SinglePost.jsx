import styled from "styled-components";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
// import User1 from "../../Assets/ajibola.svg";
// import Img from "../../Assets/image 1.svg";
// import User2 from "../../Assets/jida.png";
// import Image1 from "../../Assets/image 2.svg";
// import User3 from "../../Assets/segadu.png";
// import Image2 from "../../Assets/sloth.svg";
// import Image3 from "../../Assets/image 3.svg";

const Container = {
  Main: styled.div`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
    }

    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4% 3%;
    gap: 5px;
    border: 5px dotted yellow;;
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

    .user {
      display: flex;
      align-items: center;
      gap: 5px;
    }
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
    margin-left: -15px;
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
  `
};

const SinglePost = ({ item }) => {
  const {
    Main, Flex, H3, Span, Paragraph, Image, BottomWrapper
  } = Container;

  return (
    <Main>
      <Flex>
        <div className="user">
          <img src={Logo} alt="" className="img" />
          <H3>Temitayo Ajakore</H3>
          <Span>@temmy</Span>
        </div>
        <p>15 mins</p>
      </Flex>
      <Paragraph>
        <p>The only way to describe the</p>
        <p className="span">#womenintechmet</p>
      </Paragraph>
      <Image>
        <img className="img" src={FirstImage} alt="postimage" />
      </Image>
      <BottomWrapper>
        <div className="eventDiv">
          <h3 className="event">Event</h3>
          <p>{item?.seen}</p>
        </div>
        <div className="icons">
          <div className="iconDiv">
            <img src={Love} alt="" />
            <p>24</p>
          </div>
          <div className="iconDiv">
            <img src={Message} alt="" />
            <p>1</p>
          </div>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </div>
      </BottomWrapper>
    </Main>
  );
};

export default SinglePost;
