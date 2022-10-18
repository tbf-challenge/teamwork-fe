import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import Logo from "../../Assets/User Profile.svg";
import FirstImage from "../../Assets/wow.svg";
import SinglePostBoxStyles from "./SinlgePostBoxStyle";
import useGeneralStore from "../../context/GeneralContext";
// import User1 from "../../Assets/ajibola.svg";
// import Img from "../../Assets/image 1.svg";
// import User2 from "../../Assets/jida.png";
// import Image1 from "../../Assets/image 2.svg";
// import User3 from "../../Assets/segadu.png";
// import Image2 from "../../Assets/sloth.svg";
// import Image3 from "../../Assets/image 3.svg";

const SinglePost = ({ item: post }) => {
  const [showOptions, setShowOptions] = useState(false);
  const optRef = useRef();
  const { currentPage } = useGeneralStore();
  const navigate = /^Posts\//.test(currentPage);
  // const navigate = currentPage.startsWith("Posts/");

  window.addEventListener("click", (e) => {
    if (!optRef.current.contains(e.target)) {
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  });

  const {
    Main,
    Flex,
    User,
    H3,
    Span,
    Paragraph,
    Image,
    BottomWrapper,
    Div,
    Options,
    Img
  } = SinglePostBoxStyles;

  return (
    <Main>
      <Flex>
        <Link to="/dashboard/settings">
          <User>
            <img src={Logo} alt="" className="img" />
            <H3>{post.title || "Temitayo Ajakore"}</H3>
            <Span>@temmy</Span>
          </User>
        </Link>
        <p>15 mins</p>
      </Flex>
      <Link to={!navigate && "/dashboard/posts/id"}>
        <Paragraph>
          <p>The only way to describe the</p>
          <p className="span">#womenintechmet</p>
        </Paragraph>
        <Image>
          <img
            className="img"
            src={post.imageUrl || FirstImage}
            alt="postimage"
          />
        </Image>
      </Link>
      <BottomWrapper>
        <div className="eventDiv">
          <h3 className="event">Event</h3>
          <p>{post?.seen}</p>
        </div>
        <div className="icons">
          <Div className="iconDiv" onClick={() => console.log("hi")}>
            <img src={Love} alt="" />
            <p>24</p>
          </Div>
          <div className="iconDiv">
            <img src={Message} alt="" />
            <p>1</p>
          </div>
          <img src={Bookmark} alt="" />
          <Img
            src={Vertical}
            alt=""
            onClick={() => setShowOptions(!showOptions)}
          />
          <Options showOptions={showOptions}>
            <li>Delete</li>
            <li>opp</li>
            <li>adj</li>
          </Options>
        </div>
      </BottomWrapper>
    </Main>
  );
};

export default SinglePost;
