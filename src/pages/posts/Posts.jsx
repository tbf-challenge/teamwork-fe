import { useEffect } from "react";
import PostTopBar from "../../components/postTopBar/PostTopBar";
import useAxios from "../../hooks/useAxios";
import PostStyle from "./posts.styles";
import Published from "./published/Published";

const Posts = () => {
  // const first = useContext(second);
  const axiosInstance = useAxios();

  const fetchPosts = async () => {
    await axiosInstance
      .get("/tags/")
      .then((req) => console.log(req.data, "SUCCESS"))
      .catch((error) => console.log(error, "Home====ERROR"));
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PostStyle>
      <PostTopBar />
      <Published />
    </PostStyle>
  );
};

export default Posts;
