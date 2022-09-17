// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Topbar } from "./categories.styles";
import Forward from "../../Assets/images/forward.svg";
// import axiosInstance from "../../apis/axios-instance";

const CategoryTopbar = () => {
  // const [tags, setTags] = useState([]);

  // const mySmall = (resp) => {
  //   console.log(resp?.data?.data);
  //   setTags(() => resp?.data?.data);
  // };

  // const fetchTags = async () => {
  //   await axiosInstance
  //     .get("tags/")
  //     .then((resp) => console.log(resp?.data?.data))
  //     .catch((err) => console.warn(err));
  //   console.log("fetched");
  // };

  // console.log(tags, typeof setTags);

  // console.warn(tags, typeof setTags);

  // useEffect(() => {
  //   fetchTags();
  // }, []);

  return (
    <Topbar>
      <li>
        <Link to="/dashboard/categories">All</Link>
      </li>
      <li>
        <Link to="/dashboard/business">Business</Link>
      </li>
      <li>
        <Link to="/dashboard/event">Event</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">Finance</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">Technology</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">UX</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">Design</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">Others</Link>
      </li>
      <li>
        <Link to="/dashboard/categories">Web3</Link>
      </li>
      <img src={Forward} alt="foward" />
    </Topbar>
  );
};

export default CategoryTopbar;
