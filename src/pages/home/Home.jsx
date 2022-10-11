// import axios from "axios";
// import { useEffect } from "react";
// import { baseURL } from "../../apis/axios-instance";
// import { signIn } from "../../apis/requests";
// import { fetchPosts } from "../../apis/requests";
// import useGeneralStore from "../../context/GeneralContext";
// import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";
import SinglePost from "../../components/singlePostBox/SinglePostBox";

const Home = () => {
  // const { accessToken } = useGeneralStore();
  // const axiosInstance = useAxios();

  // const [posts, setPosts] = useState([]);

  // const fetchPosts = async () => {
  //   await axiosInstance
  //     .get("/tags/")
  //     .then((req) => console.log(req.data, "SUCCESS"))
  //     .catch((error) => console.log(error, "Home====ERROR"));
  // };

  // useEffect(() => {
  //   fetchPosts();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <HomeStyles className="mainSection">
      <SinglePost />
      <HomeDemo />
    </HomeStyles>
  );
};

export default Home;
