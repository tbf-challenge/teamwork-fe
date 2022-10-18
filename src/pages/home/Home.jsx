import { useEffect, useState } from "react";
// import useGeneralStore from "../../context/GeneralContext";
import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";
// import SinglePost from "../../components/singlePostBox/SinglePostBox";

const Home = () => {
  const axiosInstance = useAxios();

  const [posts, setPosts] = useState([]);
  console.log(posts);

  const fetchPosts = async () => {
    await axiosInstance
      .get("/feed/")
      .then((req) => {
        console.log(req.data, "SUCCESS");
        setPosts();
      })
      .catch((error) => console.log(error, "Home====ERROR"));
  };

  useEffect(() => {
    fetchPosts();
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
