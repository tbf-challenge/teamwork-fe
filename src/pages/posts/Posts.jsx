import { Link } from "react-router-dom";
import CreatePosts from "./CreatePosts";
import PostsStyles from "./posts.styles";

const Posts = () => {
  return (
    <PostsStyles>
      {/* <CreatePosts /> */}
      <h1>Choose Content Type</h1>
      <div className="link">
        <Link to={CreatePosts}>
          The link something
        </Link>
      </div>
    </PostsStyles>
  );
};

export default Posts;
