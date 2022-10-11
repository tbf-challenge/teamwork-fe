import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import SinglePostBoxStyles from "./SinlgePostBoxStyle";
// import User1 from "../../Assets/ajibola.svg";
// import Img from "../../Assets/image 1.svg";
// import User2 from "../../Assets/jida.png";
// import Image1 from "../../Assets/image 2.svg";
// import User3 from "../../Assets/segadu.png";
// import Image2 from "../../Assets/sloth.svg";
// import Image3 from "../../Assets/image 3.svg";

const SinglePost = ({ item }) => {
  const navigate = useNavigate();
  const mainRef = useRef();

  const {
    Main, Flex, User, H3, Span, Paragraph, Image, BottomWrapper
  } = SinglePostBoxStyles;

  const handleRouting = (e) => {
    // if (e.target) {
    //   navigate("");
    // }
    console.log(e.target);
    console.log(mainRef.current);
  };

  return (
    <Main onClick={handleRouting} ref={mainRef}>
      <Flex>
        <User onClick={() => navigate("/dashboard/settings")}>
          <img src={Logo} alt="" className="img" />
          <H3>Temitayo Ajakore</H3>
          <Span>@temmy</Span>
        </User>
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
