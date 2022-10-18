import { useEffect, useState } from "react";
import CategoriesWidgetStyle from "./CategoriesWidgetStyle";
import useAxios from "../../hooks/useAxios";

const CategoriesWidget = ({ header, list }) => {
  console.debug(list);
  const [catgors, setcatgors] = useState([]);
  const axiosInstance = useAxios();

  const fetchPosts = async () => {
    await axiosInstance
      .get("/tags/")
      .then((res) => {
        // console.log(res.data, "SUCCESS");
        setcatgors([...res.data.data]);
      })
      .catch((error) => console.log(error, "Home====ERROR"));
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CategoriesWidgetStyle id="widget">
      <div className="main">
        <h3 className="header">{header}</h3>
        {/* <h3>{list}</h3> */}
        <div className="list">
          {catgors.map((item) => (
            <div className="cat">
              <p>{item.title}</p>
              <p className="count">{`${item.count} posts`}</p>
            </div>
          ))}

          <div className="cat">
            <p>Business</p>
            <p className="count">1200 posts</p>
          </div>
          <div className="cat">
            <p>Event</p>
            <p className="count">800 posts</p>
          </div>
          <div className="cat">
            <p>Design</p>
            <p className="count">80 posts</p>
          </div>
          <div className="cat">
            <p>Finance</p>
            <p className="count">1870 posts</p>
          </div>
          <div className="cat">
            <p>Technology</p>
            <p className="count">180 posts</p>
          </div>
          <div className="cat">
            <p>UI/UX</p>
            <p className="count">9 posts</p>
          </div>
          <div className="cat">
            <p>Web3</p>
            <p className="count">3212 posts</p>
          </div>
        </div>
      </div>
    </CategoriesWidgetStyle>
  );
};

export default CategoriesWidget;
