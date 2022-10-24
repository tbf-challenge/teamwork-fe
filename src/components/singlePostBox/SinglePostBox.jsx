import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Love from "../../Assets/love.svg";
import Bookmark from "../../Assets/bookmark.svg";
import Message from "../../Assets/message.svg";
import Vertical from "../../Assets/more_vert.svg";
import Logo from "../../Assets/User Profile.svg";
// import FirstImage from "../../Assets/wow.svg";
import SinglePostBoxStyles from "./SinlgePostBoxStyle";
import useGeneralStore from "../../context/GeneralContext";
// import User1 from "../../Assets/ajibola.svg";
// import Img from "../../Assets/image 1.svg";
// import User2 from "../../Assets/jida.png";
// import Image1 from "../../Assets/image 2.svg";
// import User3 from "../../Assets/segadu.png";
// import Image2 from "../../Assets/sloth.svg";
// import Image3 from "../../Assets/image 3.svg";

const SinglePost = ({ post }) => {
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
            <H3>{`${post?.userId} Temitayo Ajakore`}</H3>
            <Span>@temmy</Span>
          </User>
        </Link>
        <p>15 mins</p>
      </Flex>
      <Link to={!navigate && "/dashboard/posts/id"}>
        <Paragraph>
          <p>
            <b style={{ textTransform: "uppercase", color: "darkblue" }}>
              {post.title}
            </b>
          </p>
          <p>The only way to describe</p>
          <span className="span">#womenintechmet</span>
        </Paragraph>
        {post.gifId && post.imageUrl && (
          <Image>
            <img
              className="img"
              src={
                post?.imageUrl || "https://i.ibb.co/Z1gbVV8/Screenshot-52.png"
              }
              alt="NO iMG"
            />
          </Image>
        )}
        {post.image && (
          <Image>
            <img className="img" src={post?.image || ""} alt="postimage" />
          </Image>
        )}
      </Link>
      <BottomWrapper>
        <div className="eventDiv">
          <h3 className="event">{post.gifId ? "GIF" : "ARTICLE"}</h3>
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
