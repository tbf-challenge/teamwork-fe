import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePosts from "./CreatePosts";
import CreateGIF from "./CreateGIF";
import PostsStyles from "./posts.styles";
import GIF from "../../Assets/GIF.svg";
import cancel from "../../Assets/cancel.svg";

const Posts = () => {
  const [postDisplay, setPostDisplay] = useState("none");
  const [GIFDisplay, setGIFDisplay] = useState("none");
  const chooseSection = useRef();
  const navigate = useNavigate();

  return (
    <PostsStyles>
      <CreatePosts postDisplay={postDisplay} />
      <CreateGIF postGIF={GIFDisplay} />
      <section className="chooseSection" ref={chooseSection}>
        <h2>Choose content type...</h2>
        <div className="chooseButtons">
          <button
            type="button"
            className="choose"
            onClick={() => {
              setGIFDisplay("block");
              chooseSection.current.style.display = "none";
            }}
          >
            <img src={GIF} alt="" />
            <p>Post GIF</p>
          </button>
          <button
            type="button"
            className="choose"
            onClick={() => {
              setPostDisplay("block");
              chooseSection.current.style.display = "none";
            }}
          >
            <img src={GIF} alt="" />
            <p>Post Article</p>
          </button>
        </div>
        <button
          className="cancel"
          type="button"
          onClick={() => navigate("/")}
        >
          <img src={cancel} alt="" />
        </button>
      </section>
    </PostsStyles>
  );
};

export default Posts;
