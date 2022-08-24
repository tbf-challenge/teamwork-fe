// import { useState } from "react";
import
{
  ProfileWrapper, Time, Flex, Event, BottomWrapper, Likes, Image,
  ItemWrapper, Profile, ProfileText, ProfileSpan, Paragraph, SecondPost, ThirdImage,
  ProfileSpan2, Minutes
} from "./categories.styles";
import Logo from "../../Assets/jida.png";
import FirstImage from "../../Assets/kitten.svg";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import User1 from "../../Assets/james.svg";
import Img from "../../Assets/image 2.svg";
import Image1 from "../../Assets/delepost.svg";
import User2 from "../../Assets/dele.svg";
// import User3 from "../../Assets/aderayo.svg";
import Image2 from "../../Assets/jamespost2.svg";
import User4 from "../../Assets/segadu.png";
import Image3 from "../../Assets/Article Image.svg";

const BusinessCategories = () => {
  return (
    <>
      {/* ===== first post */}
      <ProfileWrapper>
        <Profile>
          <img src={Logo} alt="" className="img" />
          <ProfileText>Jida Lawrence</ProfileText>
          <ProfileSpan>@Jida</ProfileSpan>
          <Time>1 hr</Time>
        </Profile>
        <SecondPost>How To Write Effective Software Release Notes That Delight Users</SecondPost>
        <Paragraph>
          What are good software release notes? I shared the key components
          and examples of what works or does not work in this article.
          This is based on my experience from multiple produc...
        </Paragraph>
        <ThirdImage>
          <img src={Img} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Business</Event>
        <Minutes>2 mins read</Minutes>
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

      {/* ===second Post */}

      <ProfileWrapper>
        <Profile>
          <img src={User2} alt="" className="img" />
          <ProfileText>Akintola Dele</ProfileText>
          <ProfileSpan>@Dele</ProfileSpan>
          <Time>3 hours</Time>
        </Profile>
        <SecondPost>Why Should Anyone Be Led by You? </SecondPost>
        <Paragraph>
          We all know that leaders need vision and energy. But to be inspirational,
          leaders need four other qualities that set them apart from all other type of leaders.
        </Paragraph>
        <ThirdImage>
          <img src={Image1} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Business</Event>
        <Minutes>10 mins read</Minutes>
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
          <img src={User1} alt="" className="img" />
          <ProfileText>James Nwafor</ProfileText>
          <ProfileSpan>@Jamien</ProfileSpan>
          <Time>2 hours</Time>
        </Profile>
        <Paragraph>
          Mood after an excellent work crunching data.
        </Paragraph>
        <ThirdImage>
          <img src={FirstImage} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Business</Event>
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

      {/* ===Fouth Post === */}

      <ProfileWrapper>
        <Profile>
          <img src={User2} alt="" className="img" />
          <ProfileText>Akintola Dele</ProfileText>
          <ProfileSpan>@Dele</ProfileSpan>
          <Time>1 day</Time>
        </Profile>
        <Paragraph>
          Done with the Business Plan content for the team.
        </Paragraph>
        <Image>
          <img src={Image2} alt="postimage" />
        </Image>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Business</Event>
        <ItemWrapper>
          <Flex>
            <img src={Love} alt="" />
            <Likes>8</Likes>
          </Flex>
          <Flex>
            <img src={Message} alt="" />
          </Flex>
          <img src={Bookmark} alt="" />
          <img src={Vertical} alt="" />
        </ItemWrapper>
      </BottomWrapper>

      {/* ===Fifth Post === */}

      <ProfileWrapper>
        <Profile>
          <img src={User4} alt="" className="img" />
          <ProfileText>Saviour Dagadu</ProfileText>
          <ProfileSpan2>@mansavy</ProfileSpan2>
          <Time>3 days</Time>
        </Profile>
        <SecondPost>How Different Industries Can Use a Small Business Loan</SecondPost>
        <Paragraph>
          Hear me out for a second: What if we tried bee-centered design?
        </Paragraph>
        <ThirdImage>
          <img src={Image3} alt="postimage" />
        </ThirdImage>
      </ProfileWrapper>
      <BottomWrapper>
        <Event>Business</Event>
        <Minutes>5 mins read</Minutes>
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
    </>
  );
};

export default BusinessCategories;
