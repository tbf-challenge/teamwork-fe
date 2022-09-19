// import { useState } from "react";
import
{
  Flex, BottomWrapper, H3, Paragraph, SecondDiv, Image, Span, FifthDiv,
  Span4, SecondImage, ThirdDiv, Span3, PmPost, H4, FourthDiv, Span5, SixthDiv
} from "./categories.styles";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import User1 from "../../Assets/james.svg";
import Img from "../../Assets/jamespost.svg";
import Image1 from "../../Assets/mainanpost.svg";
import User2 from "../../Assets/mainan.svg";
import User3 from "../../Assets/aderayo.svg";
import Image2 from "../../Assets/aderayopost.svg";
import User4 from "../../Assets/carl.svg";
import Image3 from "../../Assets/carlpost.svg";

const EventCategories = () => {
  return (
    <>
      {/* ===== first post */}
      <SecondDiv>
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
          <h3 className="event">Event</h3>
          <div className="container">
            <div className="btn-img">
              <img src={Love} alt="" />
              <p>24</p>
            </div>
            <div className="btn-img">
              <img src={Message} alt="" />
              <p>1</p>
            </div>
            <img src={Bookmark} alt="" />
            <img src={Vertical} alt="" />
          </div>
        </BottomWrapper>
      </SecondDiv>
      {/* ===second Post */}
      <FifthDiv>
        <Flex>
          <div className="user">
            <img src={User1} alt="" className="img" />
            <H3>James Nwafor</H3>
            <Span4>@Jamien</Span4>
          </div>
          <p>2 hours</p>
        </Flex>
        <Paragraph>
          The Bitcon conference is kicking off tomorrow.
        </Paragraph>
        <SecondImage>
          <img className="fourth-img" src={Img} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <h3 className="event">Event</h3>
          <div className="container">
            <div className="btn-img">
              <img src={Love} alt="" />
              <p>24</p>
            </div>
            <div className="btn-img">
              <img src={Message} alt="" />
              <p>1</p>
            </div>
            <img src={Bookmark} alt="" />
            <img src={Vertical} alt="" />
          </div>
        </BottomWrapper>
      </FifthDiv>
      {/* ===Third Post === */}
      <ThirdDiv>
        <Flex>
          <div className="user">
            <img src={User2} alt="" className="img" />
            <H3>Mainah Gemma</H3>
            <Span3>@Gemmz</Span3>
          </div>
          <p>2 hours</p>
        </Flex>
        <H4 className="pm-text">
          Polygon Hackathon- A Recap
        </H4>
        <PmPost>
          Two weekends ago, I took the step to challenge my knowledge of the Web3 space.
          Here is the good, bad and in-between of the event experience.
        </PmPost>
        <SecondImage>
          <img className="third-img" src={Image1} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <div className="pm">
            <h3 className="event">Event</h3>
            <p className="pm-time">3 mins read</p>
          </div>
          <div className="container">
            <div className="btn-img">
              <img src={Love} alt="" />
              <p>8</p>
            </div>
            <div className="btn-img">
              <img src={Message} alt="" />
            </div>
            <img src={Bookmark} alt="" />
            <img src={Vertical} alt="" />
          </div>
        </BottomWrapper>
      </ThirdDiv>
      {/* ===Fouth Post === */}
      <FourthDiv>
        <Flex>
          <div className="user">
            <img src={User3} alt="" className="img" />
            <H3>Aderayoo Ladi</H3>
            <Span4>@ALady</Span4>
          </div>
          <p>3 hours</p>
        </Flex>
        <PmPost>
          Reminiscing about Product Dive community meet up, It was so colorful 🎨
        </PmPost>
        <SecondImage>
          <img className="fourth-img" src={Image2} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <h3 className="event">Event</h3>
          <div className="container">
            <div className="btn-img">
              <img src={Love} alt="" />
              <p>200</p>
            </div>
            <div className="btn-img">
              <img src={Message} alt="" />
              <p>51</p>
            </div>
            <img src={Bookmark} alt="" />
            <img src={Vertical} alt="" />
          </div>
        </BottomWrapper>
      </FourthDiv>
      {/* ===Fifth Post === */}
      <SixthDiv>
        <Flex>
          <div className="user">
            <img src={User4} alt="" className="img" />
            <H3>Carl Show</H3>
            <Span5>@CShow</Span5>
          </div>
          <p>1 day</p>
        </Flex>
        <H4 className="pm-text">
          How Not To Organize a Developer Meet-Up
        </H4>
        <PmPost>
          Yes, there is swag, freebies, and stickers...but why are we here?
        </PmPost>
        <SecondImage>
          <img className="fifth-img" src={Image3} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <div className="pm">
            <h3 className="event">Event</h3>
            <p className="pm-time">6 mins read</p>
          </div>
          <div className="container">
            <div className="btn-img">
              <img src={Love} alt="" />
              <p>13</p>
            </div>
            <div className="btn-img">
              <img src={Message} alt="" />
              <p>1.2k</p>
            </div>
            <img src={Bookmark} alt="" />
            <img src={Vertical} alt="" />
          </div>
        </BottomWrapper>
      </SixthDiv>
    </>
  );
};

export default EventCategories;
