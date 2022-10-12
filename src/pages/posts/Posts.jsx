import PostTopBar from "../../components/postTopBar/PostTopBar";
import PostStyle from "./posts.styles";
import Published from "./published/Published";

const Posts = () => {
  // const first = useContext(second);
  return (
    <PostStyle>
      <PostTopBar />
      <Published />
    </PostStyle>
  );
};

export default Posts;
