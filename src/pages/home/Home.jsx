import axios from "axios";
import { useEffect } from "react";
// import { baseURL } from "../../apis/axios-instance";
// import { signIn } from "../../apis/requests";
// import { fetchPosts } from "../../apis/requests";
import useGeneralStore from "../../context/GeneralContext";
// import useAxios from "../../hooks/useAxios";
import { HomeStyles } from "./home.styles";
import HomeDemo from "./HomeDemo";
import SinglePost from "./SinglePost";

const Home = () => {
  const { accessToken } = useGeneralStore();
  // const axiosInstance = useAxios();

  // const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    console.log(accessToken);
    // const config = {
    //   method: "post",
    //   url: `${baseURL}/auth/signin/`,
    //   // headers: {
    //   //   Authorization: `Bearer ${accessToken}`
    //   // },
    //   data
    // };

    // await axios(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    try {
      const logindata = JSON.stringify({
        email: "modestcream@gmail.com",
        passsword: "1234abCD@#"
      });
      const config = {
        method: "post",
        url: "https://team-worker.herokuapp.com/api/v1/auth/signin/",
        headers: {
          "Content-Type": "application/json"
        },
        data: logindata
      };
      // const response = await signIn(logindata);
      const response = await axios(config);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
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
      <SinglePost />
      <HomeDemo />
    </HomeStyles>
  );
};

export default Home;
