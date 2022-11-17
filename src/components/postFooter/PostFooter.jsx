import React, { useEffect, useState } from "react";
import { BsImage } from "react-icons/bs";
import { RiFileGifLine } from "react-icons/ri";
import { HiOutlineTag } from "react-icons/hi";
import FooterContainer from "./postFooter.styled";
import GifContainer from "./GifContainer";
import useAxios from "../../hooks/useAxios";

const PostFooter = ({ addTag, deleteTag, handleSelectedGif }) => {
  const [displayTenor, setDisplayTenor] = useState("none");
  // eslint-disable-next-line
  const [tags, setTags] = useState();
  const axiosInstance = useAxios();
  const fileChangeHandler = (e) => {
    e.target.nextSibling.setAttribute("fill", "#1678F3");
  };

  const getTags = async () => {
    await axiosInstance
      .get("/tags/")
      .then((req) => setTags(req?.data?.data))
      .catch((error) => console.log(error));
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
    // eslint-disable-next-line
  }, []);

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
        <button type="button" htmlFor="image" className="uploadButton" onClick={() => setDisplayTenor("block")}>
          <RiFileGifLine fill="#6CAAF7" />
        </button>
        <button
          type="button"
          className="uploadButton openTags"
          onClick={() => {
            document.querySelector(".options").classList.toggle("d-none");
          }}
        >
          <HiOutlineTag stroke="#6CAAF7" />
        </button>
        <form className="options d-none" onSubmit={makeTag}>
          <input
            type="search"
            placeholder="Search for Categories"
            onInput={searchTags}
          />
          {/* eslint-disable-next-line */}
          <div className="savedTags">
            { displayNewTags }
            { displayGifTags }
          </div>
          <div className="tag-group">
            { displayTags }
          </div>
        </form>
      </div>
      <div className="categories">
        <p>Popular Category:</p>
        <button type="button" className="category">UI/UX</button>
        <button type="button" className="category">Business</button>
        <button type="button" className="category">Others</button>
      </div>
      <GifContainer displayTenor={displayTenor} handleSelectedGif={handleSelectedGif} removeTenor={() => setDisplayTenor("none")} />
    </FooterContainer>
  );
};

export default PostFooter;
