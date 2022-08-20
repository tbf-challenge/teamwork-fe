// import { useState } from "react";
import
{
  ProfileWrapper, Time, Post, Span, Flex, Image, Event, BottomWrapper, Likes,
  ItemWrapper, Profile, ProfileText, ProfileSpan, Paragraph, SecondPost, SecondImage,
  ThirdImage
} from "./home.styles";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import User1 from "../../Assets/ajibola.svg";
import Img from "../../Assets/image 1.svg";
import Image1 from "../../Assets/image 2.svg";
import User2 from "../../Assets/jida.png";
import User3 from "../../Assets/segadu.png";
import Image2 from "../../Assets/sloth.svg";
import Image3 from "../../Assets/image 3.svg";

const HomePost = () => {
  // const [like, setLike] = useState("");
  // const [isLiked, setIsLiked] = useState(false);

  // const handleClick = () => {
  //   setLike(isLiked ? like - 1 : like + 1);
  // };

  return (
    <>
      {/* ===== first post */}
      <ProfileWrapper>
        <Profile>
          <img src={Logo} alt="" className="img" />
          <ProfileText>Temitayo Ajakore</ProfileText>
          <ProfileSpan>@temmy</ProfileSpan>
          <Time>15 mins</Time>
        </Profile>
        <Flex>
          <Post>The only way to describe the</Post>
          <Span>#womenintechmet</Span>
        </Flex>
        <Image>
          <img src={FirstImage} alt="postimage" />
        </Image>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>21</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>1</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>

      {/* ===second Post */}

      <ProfileWrapper>
        <Profile>
          <img src={User1} alt="" className="img" />
          <ProfileText>Ajibola Azeez</ProfileText>
          <ProfileSpan>@jbz</ProfileSpan>
          <Time>28 mins</Time>
        </Profile>
        <SecondPost>Becoming a sort-after PM</SecondPost>
        <Paragraph>
          The era of building products without a dedicated product manager is long gone.
          More organization are adopting
          Product manageent as a crucial tool in the development of their...
        </Paragraph>
        <SecondImage>
          <img src={Img} alt="postimage" />
        </SecondImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>21</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>1</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>
      {/* ===Third Post === */}

      <ProfileWrapper>
        <Profile>
          <img src={User2} alt="" className="img" />
          <ProfileText>Jida Lawrence</ProfileText>
          <ProfileSpan>@jida</ProfileSpan>
          <Time>1 hr</Time>
        </Profile>
        <SecondPost>How To Write Effective Software Release Notes That Delight Users</SecondPost>
        <Paragraph>
          What are good software release notes?
          I shared the key components and examples
          of what works or does not work in this article.
          This is based on my experience from multiple produc...
        </Paragraph>
        <ThirdImage>
          <img src={Image1} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>21</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>1</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>

      {/* ===Fouth Post === */}

      <ProfileWrapper>
        <Profile>
          <img src={User3} alt="" className="img" />
          <ProfileText>Saviour Dagadu</ProfileText>
          <ProfileSpan>@mansavy</ProfileSpan>
          <Time>1 hr</Time>
        </Profile>
        <Paragraph>
          The plan for the weekend is not to think of work.
          Rest, play, and refresh for the coming week.
        </Paragraph>
        <Image>
          <img src={Image2} alt="postimage" />
        </Image>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>21</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>1</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>

      {/* ===Fifth Post === */}

      <ProfileWrapper>
        <Profile>
          <img src={User2} alt="" className="img" />
          <ProfileText>Solange Spencer</ProfileText>
          <ProfileSpan>@Asa</ProfileSpan>
          <Time>1 hr</Time>
        </Profile>
        <SecondPost>Human-Centered Design Is Broken. Here’s a Better Alternative</SecondPost>
        <Paragraph>
          Hear me out for a second: What if we tried bee-centered design?
        </Paragraph>
        <ThirdImage>
          <img src={Image3} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>21</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>1</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>
    </>
  );
};

export default HomePost;
