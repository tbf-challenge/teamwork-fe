import {
  FirstDiv, Button, SecondDiv, Flex, Span, H3, Paragraph, Image, BottomWrapper,
  PM, Container, PmPost, SecondImage, H2, ThirdDiv, FourthDiv, FifthDiv, SixthDiv,
  Span2, Span3, Span4, Span5
}
  from "./home.styles";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import User1 from "../../Assets/ajibola.svg";
import Img from "../../Assets/image 1.svg";
import User2 from "../../Assets/jida.png";
import Image1 from "../../Assets/image 2.svg";
import User3 from "../../Assets/segadu.png";
import Image2 from "../../Assets/sloth.svg";
import Image3 from "../../Assets/image 3.svg";

const HomeDemo = () => {
  return (
    <div>
      <FirstDiv>
        <h1 className="title">Home</h1>
        <Button className="btn" type="button">Create Post</Button>
      </FirstDiv>
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

      {/* ==== Second Post === */}
      <ThirdDiv>
        <Flex>
          <div className="user">
            <img src={User1} alt="" className="img" />
            <H3>Ajibola Azeez</H3>
            <Span2>@jibz</Span2>
          </div>
          <p>28 mins</p>
        </Flex>
        <PM>
          <h3 className="pm-text">Becoming a sort-after PM</h3>
          <PmPost>
            The era of building products without a dedicated product manager is long gone.
            More organization are adopting producuct managment as a crucial
            tool in the development of their...
          </PmPost>
        </PM>
        <SecondImage>
          <img className="second-img" src={Img} alt="postimage" />
        </SecondImage>
        <BottomWrapper>
          <div className="pm">
            <h3 className="pm-pm">PM</h3>
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
      </ThirdDiv>

      {/* === Third Post==== */}

      <Container>
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
      </Container>

      {/* ====Fourth Post==== */}

      <Container>
        <FifthDiv>
          <Flex>
            <div className="user">
              <img src={User3} alt="" className="img" />
              <H3>Saviour Dagadu</H3>
              <Span4>@mansavy</Span4>
            </div>
            <p>1 hour</p>
          </Flex>
          <PmPost>
            The plan for the weekend is not to think of work.
            Rest, play, and refresh for the coming week.
          </PmPost>
          <SecondImage>
            <img className="fourth-img" src={Image2} alt="postimage" />
          </SecondImage>
          <BottomWrapper>
            <h3 className="event">Other</h3>
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
      </Container>

      {/* ==== Fifth Post===== */}

      <Container>
        <SixthDiv>
          <Flex>
            <div className="user">
              <img src={User2} alt="" className="img" />
              <H3>Solange Spencer</H3>
              <Span5>@ASA</Span5>
            </div>
            <p>2 hours</p>
          </Flex>
          <H2 className="pm-text">
            Human-Centered Design Is Broken. Here’s a Better Alternative
          </H2>
          <PmPost>
            Hear me out for a second: What if we tried bee-centered design?
          </PmPost>
          <SecondImage>
            <img className="third-img" src={Image3} alt="postimage" />
          </SecondImage>
          <BottomWrapper>
            <div className="pm">
              <h3 className="pm-pm">UX</h3>
              <p className="pm-time">6mins read</p>
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
        </SixthDiv>
      </Container>
    </div>
  );
};

export default HomeDemo;
