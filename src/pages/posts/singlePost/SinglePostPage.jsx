import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SinglePost from "../../../components/singlePostBox/SinglePostBox";
import useAxios from "../../../hooks/useAxios";
import SinglePostPageStyle from "./SinglePostPageStyle";

const SinglePostPage = ({ item }) => {
  const { postId, postUrl } = useParams();
  const axiosInstance = useAxios();

  // const [post, setPost] = useState([]);

  const fetchPost = async () => {
    await axiosInstance
      .get(`/${postUrl}/${postId}`)
      .then((req) => {
        console.warn(req.data.data, "SUCCESS fetch at POST PAGE");
        // setPost(...req.data.data);
      })
      .catch(() => console.warn("this Home====ERROR"));
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SinglePostPageStyle>
      <SinglePost item={item} />
    </SinglePostPageStyle>
  );
};

export default SinglePostPage;
