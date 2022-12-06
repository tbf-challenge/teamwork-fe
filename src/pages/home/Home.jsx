import { useEffect, useState } from "react";
// import useGeneralStore from "../../context/GeneralContext";
import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
// import HomeDemo from "./HomeDemo";
import SinglePost from "../../components/singlePostBox/SinglePostBox";

const Home = () => {
  const axiosInstance = useAxios();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await axiosInstance
      .get("/feed/")
      .then((req) => {
        console.warn(req.data.data, "SUCCESS fetch at home");
        setPosts((prev) => [...req.data.data, ...prev]);
        // setPosts((prev) => [...prev]);
      })
      .catch(() => console.warn("this Home====ERROR"));
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <HomeStyles className="mainSection">
      {posts ? (
        posts.map((post) => (
          <SinglePost
            key={`GIF_${post.gifId}` || `ARTICLE_${post.articleId}`}
            post={post}
          />
        ))
      ) : (
        <h1 style={{ fontSize: "45px", color: "red" }}>NO POST</h1>
      )}

      {/* <HomeDemo /> */}
    </HomeStyles>
  );
};

export default Home;
