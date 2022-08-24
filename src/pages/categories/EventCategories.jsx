// import { useState } from "react";
import
{
  ProfileWrapper, Time, Post, Span, Flex, Image, Event, BottomWrapper, Likes,
  ItemWrapper, Profile, ProfileText, ProfileSpan, Paragraph, SecondPost, ThirdImage,
  ProfileSpan2, Minutes
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
          <ProfileText>James Nwafor</ProfileText>
          <ProfileSpan>@Jamien</ProfileSpan>
          <Time>2 hours</Time>
        </Profile>
        <Paragraph>
          Mood after an excellent work crunching data.
        </Paragraph>
        <ThirdImage>
          <img src={Img} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>24</Likes>
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
          <ProfileText>Mainah Gemma</ProfileText>
          <ProfileSpan>@Gemmz</ProfileSpan>
          <Time>2 hours</Time>
        </Profile>
        <SecondPost>Polygon Hackathon- A Recap</SecondPost>
        <Paragraph>
          Two weekends ago, I took the step to challenge my knowledge of the Web3 space.
          Here is the good, bad and in-between of the event experience.
        </Paragraph>
        <ThirdImage>
          <img src={Image1} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <Minutes>3 mins read</Minutes>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>8</Likes>
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
          <ProfileText>Aderayoo Ladi</ProfileText>
          <ProfileSpan>@ALady</ProfileSpan>
          <Time>3 hours</Time>
        </Profile>
        <Paragraph>
          Reminiscing about Product Dive community meet up, It was so colorful 🎨
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
            <Likes>200</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>51</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>

      {/* ===Fifth Post === */}

      <ProfileWrapper>
        <Profile>
          <img src={User4} alt="" className="img" />
          <ProfileText>Carl Show</ProfileText>
          <ProfileSpan2>@CShow</ProfileSpan2>
          <Time>1 day</Time>
        </Profile>
        <SecondPost>How Not To Organize a Developer Meet-Up</SecondPost>
        <Paragraph>
          Yes, there is swag, freebies, and stickers...but why are we here?
        </Paragraph>
        <ThirdImage>
          <img src={Image3} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Event</Event>
        <Minutes>6 mins read</Minutes>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>13</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
            <Likes>1.2k</Likes>
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>
    </>
  );
};

export default EventCategories;
