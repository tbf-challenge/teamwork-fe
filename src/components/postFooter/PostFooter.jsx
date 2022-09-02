import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsImage } from "react-icons/bs";
import { RiFileGifLine } from "react-icons/ri";
import { HiOutlineTag } from "react-icons/hi";
import FooterContainer from "./postFooter.styled";

const PostFooter = ({ addTag, deleteTag }) => {
  const url = "https://team-worker.herokuapp.com/api/v1/tags";
  const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImpvbmFAZ21haWwuY29tIn0sImlhdCI6MTY2MTQxNjQzNH0.yq_eZqzaIA1o-fyWGzog5TUZPUBlSrshbImeiOBJ7Hg";
  const [tags, setTags] = useState();

  const fileChangeHandler = (e) => {
    e.target.nextSibling.setAttribute("fill", "#1678F3");
    if (e.target.id === "image") {
      console.log("adding image", e.target.files[0]);
    }
  };

  const getTags = async () => {
    try {
      const res = await axios.get(url, {
        method: "GET",
        // eslint-disable-next-line
        headers: { Authorization: apiKey }
      });
      setTags(res?.data?.data);
    } catch (error) {
      console.log(error?.response?.statusText);
    }
  };

  const displayTags = tags && tags?.map(({ id, title }) => {
    return (
      <button type="button" className="tag d-none" key={id} onClick={addTag} value={id}>{title}</button>
    );
  });

  const searchTags = (e) => {
    const searchValue = e.target.value;
    document.querySelectorAll(".tag").forEach((aTag) => {
      // console.log(tag.innerHTML);
      // console.log(searchValue);
      const tagText = aTag.innerHTML;
      if (!searchValue) {
        aTag.classList.add("d-none");
      } else if (tagText.toLowerCase().includes(searchValue.toLowerCase())) {
        aTag.classList.remove("d-none");
      } else if (!tagText.toLowerCase().includes(searchValue.toLowerCase())) {
        aTag.classList.add("d-none");
      }
    });
  };
  // sessionStorage.removeItem("newTagArray");
  const articleTagArray = JSON.parse(sessionStorage.getItem("articleTagArray"));
  const gifTagArray = JSON.parse(sessionStorage.getItem("gifTagArray"));

  const displayNewTags = articleTagArray && articleTagArray.map(({ id, title }) => {
    return (
      <div className="savedTag" key={id}>
        <span>{title}</span>
        <button type="button" value={id} onClick={deleteTag}>X</button>
      </div>
    );
  });

  const displayGifTags = gifTagArray && gifTagArray?.map(({ id, title }) => {
    return (
      <div className="savedTag" key={id}>
        <span>{title}</span>
        <button type="button" value={id} onClick={deleteTag}>X</button>
      </div>
    );
  });

  useEffect(() => {
    getTags();
  }, [url]);

  const makeTag = (e) => {
    // eslint-disable-next-line
    e.preventDefault();
  };

  return (
    <FooterContainer>
      <div className="types">
        <button type="button" htmlFor="image" className="uploadButton">
          <input type="file" id="image" accept="image/*" placeholder="" onChange={fileChangeHandler} />
          <BsImage fill="#6CAAF7" />
        </button>
        <button type="button" htmlFor="image" className="uploadButton">
          <input type="file" id="image" accept="gif/*" placeholder="" onChange={fileChangeHandler} />
          <RiFileGifLine fill="#6CAAF7" />
        </button>
        <button
          type="button"
          className="uploadButton"
          onClick={() => {
            document.querySelector(".options").classList.toggle("d-none");
          }}
        >
          <HiOutlineTag stroke="#6CAAF7" />
        </button>
        <form className="options d-none" onSubmit={makeTag}>
          <input
            type="search"
            placeholder="Enter categories (comma seperated)"
            onInput={searchTags}
          />
          {/* eslint-disable-next-line */}
          <div className="savedTags">
            { displayNewTags }
            { displayGifTags }
          </div>
          <div className="tag-group">
            <button type="button" className="tag d-none" onClick={addTag} value="cat">Cat</button>
            <button type="button" className="tag d-none" onClick={addTag} value="dog">Dog</button>
            <button type="button" className="tag d-none" onClick={addTag} value="sheep">Sheep</button>
            <button type="button" className="tag d-none" onClick={addTag} value="goat">Goat</button>
            <button type="button" className="tag d-none" onClick={addTag} value="snake">Snake</button>
            <button type="button" className="tag d-none" onClick={addTag} value="chicken">Chicken</button>
            { displayTags }
          </div>
          {/* <select name="" id="" className="d-none"> */}
        </form>
      </div>
      <div className="categories">
        <p>Popular Category:</p>
        <button type="button" className="category">UI/UX</button>
        <button type="button" className="category">Business</button>
        <button type="button" className="category">Others</button>
      </div>
    </FooterContainer>
  );
};

export default PostFooter;
