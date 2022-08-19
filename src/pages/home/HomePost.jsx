// import { useState } from "react";
import
{
  ProfileWrapper, Time, Post, Span, Flex, Image, Event, BottomWrapper, Likes,
  ItemWrapper, Profile, ProfileText, ProfileSpan
} from "./home.styles";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";

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
    </>
  );
};

export default HomePost;
