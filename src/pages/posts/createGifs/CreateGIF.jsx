/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LargeButton from "../../../components/buttons/LargeButton";
import MediumButton from "../../../components/buttons/MediumButton";
import Back from "../../../Assets/images/Back.svg";
import user from "../../../Assets/images/User Profile.png";
import CreateGIFContainer from "./createGIF.styles";
import PostFooter from "../../../components/postFooter/PostFooter";
import useAxios from "../../../hooks/useAxios";

const CreateGIF = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  // eslint-disable-next-line
  const [gifTagArray, setGifTagArray] = useState([]);
  const [selectedGif, setSelectedGif] = useState("");
  const axiosInstance = useAxios();

  useEffect(() => {
    sessionStorage.removeItem("articleTagArray");
  }, []);

  const publishGIF = async (published) => {
    console.log(title, published, selectedGif);
    try {
      const res = await axiosInstance
        .post("/gifs", { title, image: selectedGif, published });
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      // eslint-disable-next-line
      (gifTagArray && articleId) && gifTagArray.forEach((tag) => assignGifTag(tag));
    }
  };

  const addTag = (e) => {
    const newTag = e.target.innerHTML;
    const tagId = e.target.value;
    setGifTagArray((prev) => [...prev, { id: tagId, title: newTag }]);
  };
  sessionStorage.setItem("gifTagArray", JSON.stringify(gifTagArray));

  const deleteTag = (e) => {
    e.target.parentElement.classList.add("d-none");
    const id = e.target.value;
    const newArray = gifTagArray.filter((tag) => tag.id !== id);
    setGifTagArray(newArray);
    sessionStorage.setItem("gifTagArray", JSON.stringify(gifTagArray));
  };

  const handleSelectedGif = (e) => {
    const imgSrc = e.target.id;
    const pageBody = document.querySelector("#caption");
    console.log(pageBody);
    const gif = document.createElement("img");
    gif.style.width = "100%";
    gif.src = imgSrc;
    pageBody.parentElement.appendChild(gif);
    setSelectedGif(imgSrc);
  };

  return (
    <CreateGIFContainer>
      <div className="submitRow">
        <MediumButton
          width="120px"
          bgColor="transparent"
          iconLeft={Back}
          color="black"
          left="0"
          Text="Back"
          top="17px"
          padding="0 20px"
          className="back"
          onClick={() => navigate("/posts")}
        />

        <LargeButton
          bgColor="transparent"
          color="black"
          width="24%"
          Text="Save Draft"
          className="save"
          onClick={() => publishGIF(false)}
        />

        <LargeButton
          // eslint-disable-next-line
          bgColor={title ? "#1678F3" :"#F3F4F6"}
          color={title ? "#FFFFFF" : "#D2D5DA"}
          width="24%"
          Text="Post GIF"
          className="post"
          onClick={() => publishGIF(true)}
        />

      </div>
      <div className="user">
        <img src={user} alt="" />
        <p>
          Solange Spencer
          <span style={{
            color: "#4B5563",
            fontSize: "16px",
            paddingLeft: "5px",
            fontWeight: 400
          }}
          >
            @ASA
          </span>
        </p>
      </div>
      <div>
        {/* eslint-disable-next-line */}
        <textarea name="caption" id="caption" cols="50" placeholder="Please share your thoughts..." value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
      </div>
      <PostFooter addTag={addTag} deleteTag={deleteTag} handleSelectedGif={handleSelectedGif} />
    </CreateGIFContainer>
  );
};

export default CreateGIF;
