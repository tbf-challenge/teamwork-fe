import React from "react";
import RightContainer from "./rightbar.styles";

const RightCategories = () => {
  return (
    <RightContainer>
      <h1 className="title">Categories</h1>
      <div className="wrapper">
        <div className="post">
          <h1>Business</h1>
          <p>1,200 posts</p>
        </div>
        <div className="post">
          <h1>Event</h1>
          <p>800 posts</p>
        </div>
        <div className="post">
          <h1>Design</h1>
          <p>40 posts</p>
        </div>
        <div className="post">
          <h1>Finance</h1>
          <p>1,040 posts</p>
        </div>
        <div className="post">
          <h1>Technology</h1>
          <p>40 posts</p>
        </div>
        <div className="post">
          <h1>UX</h1>
          <p>40 posts</p>
        </div>
        <div className="post">
          <h1>Web3</h1>
          <p>40 posts</p>
        </div>
      </div>
    </RightContainer>
  );
};

export default RightCategories;
