import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./postTopbar.styles";

const PostTopBar = () => {
  return (
    <TopBar>
      <li>
        <Link to="published">Published</Link>
      </li>
      <li>
        <Link to="draft">Draft</Link>
      </li>
    </TopBar>
  );
};

export default PostTopBar;
