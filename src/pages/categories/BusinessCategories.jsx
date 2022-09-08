// import { useState } from "react";
import
{
  Flex, BottomWrapper, H3, FourthDiv, Span3, H2, PmPost, SecondImage, ThirdDiv,
  H1, FifthDiv, Span4, Paragraph, SecondDiv, Image, Span2
} from "./categories.styles";
// import Logo from "../../Assets/jida.png";
import FirstImage from "../../Assets/kitten.svg";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import User1 from "../../Assets/james.svg";
// import Img from "../../Assets/image 2.svg";
import ImageD from "../../Assets/delepost.svg";
import User22 from "../../Assets/dele.svg";
import User2 from "../../Assets/jida.png";
import Image1 from "../../Assets/image 2.svg";
// import User3 from "../../Assets/aderayo.svg";
import Image2 from "../../Assets/jamespost2.svg";
import User4 from "../../Assets/segadu.png";
import Image3 from "../../Assets/Article Image.svg";

const BusinessCategories = () => {
  return (
    <>
      {/* ===== first post */}
      <FourthDiv>
        <Flex>
          <div className="user">
            <img src={User2} alt="" className="img" />
            <H3>Jida Lawrence</H3>
            <Span3>@Jida</Span3>
          </div>
          <p>1 hour</p>
        </Flex>
        <H2 className="pm-text">
          How To Write Effective Software Release
          Notes That Delight Users
        </H2>
        <PmPost>
          What are good software release notes?
          I shared the key components and examples
          of what works or does not work in the article. This is based on my experience
          from multiple produc...
        </PmPost>
        <SecondImage>
          <img className="third-img" src={Image1} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <div className="pm">
            <h3 className="pm-business">Business</h3>
            <p className="pm-time">2mins read</p>
          </div>
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
      </FourthDiv>

      {/* ===second Post */}
      <ThirdDiv>
        <Flex>
          <div className="user">
            <img src={User22} alt="" className="img" />
            <H3>Akintola Dele</H3>
            <Span3>@Dele</Span3>
          </div>
          <p>3 hours</p>
        </Flex>
        <H1 className="pm-text">
          Why Should Anyone Be Led by You?
        </H1>
        <PmPost className="pm-text">
          We all know that leaders need vision and energy. But to be inspirational,
          leaders need four other qualities that set them apart from all other type of leaders.
        </PmPost>
        <SecondImage>
          <img className="third-img" src={ImageD} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <div className="pm">
            <h3 className="pm-business">Business</h3>
            <p className="pm-time">10mins read</p>
          </div>
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
      </ThirdDiv>
      {/* ===Third Post === */}

      <FifthDiv>
        <Flex>
          <div className="user">
            <img src={User1} alt="" className="img" />
            <H3>James Nwafor</H3>
            <Span4>@Jamien</Span4>
          </div>
          <p>1 hour</p>
        </Flex>
        <Paragraph>
          Mood after an excellent work crunching data.
        </Paragraph>
        <SecondImage>
          <img className="fourth-img" src={FirstImage} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <h3 className="pm-business">Business</h3>
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
      {/* ===Fouth Post === */}

      <SecondDiv>
        <Flex>
          <div className="user">
            <img src={User22} alt="" className="img" />
            <H3>Akintola Dele</H3>
            <Span4>@Dele</Span4>
          </div>
          <p>1 day</p>
        </Flex>
        <Paragraph>
          Done with the Business Plan content for the team.
        </Paragraph>
        <Image>
          <img className="img" src={Image2} alt="postimage" />
        </Image>
        <BottomWrapper>
          <h3 className="pm-business">Business</h3>
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
      </SecondDiv>
      {/* ===Fifth Post === */}
      <FourthDiv>
        <Flex>
          <div className="user">
            <img src={User4} alt="" className="img" />
            <H3>Saviour Dagadu</H3>
            <Span2>@mansavy</Span2>
          </div>
          <p>3 days</p>
        </Flex>
        <H2 className="pm-text">
          How Different Industries Can Use a Small Business Loan
        </H2>
        <PmPost>
          When running a successful small business, there will always be room for improvement.
        </PmPost>
        <SecondImage>
          <img className="third-img" src={Image3} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <div className="pm">
            <h3 className="pm-business">Business</h3>
            <p className="pm-time">5mins read</p>
          </div>
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
      </FourthDiv>
    </>
  );
};

export default BusinessCategories;
