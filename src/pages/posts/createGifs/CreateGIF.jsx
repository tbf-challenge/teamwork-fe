import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LargeButton from "../../../components/buttons/LargeButton";
import MediumButton from "../../../components/buttons/MediumButton";
import Back from "../../../Assets/images/Back.svg";
import user from "../../../Assets/images/User Profile.png";
import CreateGIFContainer from "./createGIF.styles";
import PostFooter from "../../../components/postFooter/PostFooter";

const CreateGIF = () => {
  const navigate = useNavigate();
  const [description, setDes] = useState("");
  // eslint-disable-next-line
  const [gifTagArray, setGifTagArray] = useState([]);

  useEffect(() => {
    sessionStorage.removeItem("articleTagArray");
  }, []);

  const addTag = (e) => {
    const newTag = e.target.innerHTML;
    const tagId = e.target.value;
    // eslint-disable-next-line
    // setNewTagArray((prev) => [...prev, newTag]);
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
        />
        <LargeButton
          // eslint-disable-next-line
          bgColor={description ? "#1678F3" :"#F3F4F6"}
          color={description ? "#FFFFFF" : "#D2D5DA"}
          width="24%"
          Text="Post GIF"
          className="post"
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
      {/* <input type="text" placeholder="" /> */}
      <div>
        <textarea name="caption" id="" cols="60" rows="20" placeholder="Please share your thoughts..." value={description} onChange={(e) => setDes(e.target.value)} />
      </div>
      <PostFooter addTag={addTag} deleteTag={deleteTag} />
    </CreateGIFContainer>
  );
};

export default CreateGIF;
