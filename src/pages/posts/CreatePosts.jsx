import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import LargeButton from "../../components/button/LargeButton";
import MediumButton from "../../components/button/MediumButton";
import Back from "../../Assets/Back.svg";
import AddPhoto from "../../Assets/add_photo_alternate.svg";
import image1 from "../../Assets/image1.svg";
import GIF from "../../Assets/GIF.svg";
import image3 from "../../Assets/image3.svg";
import user from "../../Assets/User Profile.png";
import CreatePostContainer from "./CreatePosts.style";

const CreatePosts = () => {
  const modules = {
    toolbar: [
      [{ header: [false, 1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["blockquote"],
      ["image"]
    ]
  };

  const { quill, quillRef } = useQuill({ modules });

  const [editorState, setEditorState] = useState("");

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML("<h1>Title</h1><p>Share your thoughts...</p>");
      quill.on("text-change", () => {
        // setValue(quillRef.current.firstChild.innerHTML);
        if (quillRef.current.innerText.length > 4) {
          setEditorState("typing");
        } else {
          setEditorState("");
        }
      });
    }
  }, [quill, quillRef]);

  const fileChangeHandler = (e) => {
    // eslint-disable-next-line
    console.log(e.target.files[0]);
  };

  return (
    <CreatePostContainer>
      <div className="submitRow">
        <MediumButton
          width="80px"
          bgColor="transparent"
          iconLeft={Back}
          color="black"
          left="0"
          Text="Back"
          top="16px"
          padding="0 20px"
          className="back"
        />
        <LargeButton
          bgColor="transparent"
          color="black"
          width="24%"
          Text="Save as Draft"
          className="save"
        />
        <LargeButton
          // eslint-disable-next-line
          bgColor= {editorState === "typing" ? "blue" : "transparent"}
          color="white"
          width="24%"
          Text="Publish Article"
          className="publish"
        />
      </div>
      <div className="user">
        <img src={user} alt="" />
        <p>
          Solange Spencer
          <span style={{ color: "#4B5563", paddingLeft: "5px", fontWeight: 500 }}>@ASA</span>
        </p>
      </div>
      <div
        id="quillDiv"
        style={{
          paddingTop: 10
        }}
      >
        <div id="#toolbar">
          <label htmlFor="cover-image">
            <input type="file" id="cover-image" accept="image/*" placeholder="" onChange={fileChangeHandler} />
            <img src={AddPhoto} alt="" />
            Add cover image
          </label>
        </div>
        <div ref={quillRef} />
      </div>

      <div className="bottom-stuff">
        <div className="types">
          <img src={image1} alt="" />
          <img src={GIF} alt="" />
          <img src={image3} alt="" />
        </div>
        <div className="categories">
          <p>Popular Category:</p>
          <p className="category">Business</p>
          <p className="category">UI/UX</p>
          <p className="category">Others</p>
        </div>
      </div>
    </CreatePostContainer>
  );
};

export default CreatePosts;
