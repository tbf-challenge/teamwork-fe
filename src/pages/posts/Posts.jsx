import { useNavigate } from "react-router-dom";
import PostsStyles from "./posts.styles";
import GIF from "../../Assets/images/GIF.svg";
import cancel from "../../Assets/images/cancel.svg";

const Posts = () => {
  const navigate = useNavigate();

  return (
    <PostsStyles>
      <section className="chooseSection">
        <h2>Choose content type...</h2>
        <div className="chooseButtons">
          <button
            type="button"
            className="choose"
            onClick={() => navigate("gif")}
          >
            <img src={GIF} alt="" />
            <p>Post GIF</p>
          </button>
          <button
            type="button"
            className="choose"
            onClick={() => navigate("article")}
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
