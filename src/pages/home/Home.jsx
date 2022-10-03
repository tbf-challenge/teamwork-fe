import axios from "axios";
import { useEffect } from "react";
// import { fetchPosts } from "../../apis/requests";
import RightCategories from "../../components/rightbar/RightCategories";
import useGeneralStore from "../../context/GeneralContext";
// import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";

const Home = () => {
  const { accessToken } = useGeneralStore();
  // const axiosInstance = useAxios();

  // const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const config = {
      method: "get",
      url: "https://team-worker.herokuapp.com/api/v1/tags/",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };

    await axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    // try {
    //   const response = await axios.get("/tags/", {
    //     headers: { Authorisation: `Bearer ${accessToken}` }
    //   });
    //   const data = await response.data;
    //   console.log(data);
    // } catch (error) {
    //   console.log("error", error);
    // }
  };

  useEffect(() => {
    fetchPosts();
    // const getPost = async () => {
    //   await axiosInstance
    //     .get("/tags/")
    //     .then((req) => console.log(req.data, "SUCCESS"))
    //     .catch((error) => console.log(error, "Home====ERROR"));
    // };
    // getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeStyles className="mainSection">
      <HomeDemo />
      {/* <div style={{ width: "100%", background: "red", border: "5px solid blue" }}>
        kadsjkjfk.sdjfkkajsfnk
      </div> */}
      <RightCategories />
    </HomeStyles>
  );
};

export default Home;
