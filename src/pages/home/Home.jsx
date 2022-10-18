import { useEffect, useState } from "react";
// import useGeneralStore from "../../context/GeneralContext";
import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";
// import SinglePost from "../../components/singlePostBox/SinglePostBox";

const Home = () => {
  const axiosInstance = useAxios();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await axiosInstance
      .get("/feed/")
      .then((req) => {
        console.log(req.data, "SUCCESS fetch at home");
        setPosts();
      })
      .catch((error) => console.log(error, "this Home====ERROR"));
  };

  useEffect(() => {
    fetchPosts();
    console.log(posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeStyles className="mainSection">
      {/* {posts.map((post) => (
        <SinglePost post={post} />
      ))} */}
      <HomeDemo />
    </HomeStyles>
  );
};

export default Home;
