import SinglePost from "../../../components/singlePostBox/SinglePostBox";
import SinglePostPageStyle from "./SinglePostPageStyle";

const SinglePostPage = ({ item }) => {
  return (
    <SinglePostPageStyle>
      <SinglePost item={item} />
    </SinglePostPageStyle>
  );
};

export default SinglePostPage;
