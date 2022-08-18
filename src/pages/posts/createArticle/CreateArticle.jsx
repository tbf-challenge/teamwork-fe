import "quill/dist/quill.snow.css";
import React from "react";
import CreatePosts from "../CreatePosts";
// import CreateArticleContainer from "./createArticleStyle";
// import postImage from "../../Assets/Post Image.png";

const CreateArticle = () => {
  return (
    <CreatePosts>
      <div className="content" style={{ padding: "10px 20px" }}>
        {/* <img src={postImage} alt="" style={{ width: "100%" }} /> */}
        <h2>UI/UX Design</h2>
        {/* eslint-disable-next-line */}
        <p>UX and UI: Two terms that are often used interchangeably, but actually mean very different things. So what exactly is the difference?</p>
        <br />
        {/* eslint-disable-next-line */}
        <p>We’ve all overheard conversations, walking down hip streets of the world’s tech capitals, discussions about the great ‘UX’ of a product, or the poor ‘UI’ of a website. Is it a secret language you will never be privy to? Are these people just using slang to look cool?</p>
        <br />
        <h5 style={{ fontSize: "20px", fontWeight: 600 }}>Understanding the Difference Between UI and UX Design</h5>
        {/* eslint-disable-next-line */}
        <p>Whether or not UI and UX design are a mystery to you, it's safe to say that each workplace has a slightly different approach. It’s true that a UI (user interface) or UX (user experience) designers’ main aim is to enhance users’ satisfaction, by creating products and interfaces that are intuitive, simple and efficient</p>
      </div>
    </CreatePosts>
  );
};

export default CreateArticle;
