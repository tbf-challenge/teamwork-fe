import { useNavigate } from "react-router-dom";
import { useQuill } from "react-quilljs";
// eslint-disable-next-line
import "quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import LargeButton from "../../../components/buttons/LargeButton";
import MediumButton from "../../../components/buttons/MediumButton";
import Back from "../../../Assets/images/Back.svg";
import AddPhoto from "../../../Assets/images/add_photo_alternate.svg";
import user from "../../../Assets/images/User Profile.png";
import CreatePostContainer from "./CreatePosts.style";
import PostFooter from "../../../components/postFooter/PostFooter";
import useAxios from "../../../hooks/useAxios";

const CreatePosts = () => {
  const modules = {
    toolbar: [
      [{ header: [false, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["blockquote"],
      ["image"]
    ]
  };

  const { quill, quillRef } = useQuill({ modules });
  const [editorState, setEditorState] = useState("");
  const [quillValue, setQuillValue] = useState("");
  const navigate = useNavigate();
  const [articleTagArray, setArticleTagArray] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    sessionStorage.removeItem("gifTagArray");
  }, []);

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        "<h1>Title</h1><p>Share your thoughts...</p>"
      );
      quill.on("text-change", () => {
        setQuillValue(quillRef.current.firstChild.innerHTML);
        if (quillRef.current.innerText.length > 4) {
          setEditorState("typing");
        } else {
          setEditorState("");
        }
      });
    }
  }, [quill, quillRef]);

  const fileChangeHandler = async (e) => {
    console.log(e.target.files);
    const qlEditor = document.querySelector(".ql-editor");
    if (e.target.files.length <= 1) {
      const lastImg = e.target.files[0];
      const src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(lastImg);
        reader.onload = () => resolve(reader.result);
      });
      const coverImg = document.createElement("IMG");
      coverImg.src = src;
      qlEditor.prepend(coverImg);
      e.target.setAttribute("disabled", "");
    }
  };

  const addTag = (e) => {
    const newTag = e.target.innerHTML;
    const tagId = e.target.value;
    // Make sure the chosen tags don't contain the same tag twice;
    setArticleTagArray(articleTagArray.filter((tag) => tagId !== tag.id));
    setArticleTagArray((prev) => [...prev, { id: tagId, title: newTag }]);
  };
  sessionStorage.setItem("articleTagArray", JSON.stringify(articleTagArray));

  const deleteTag = (e) => {
    e.target.parentElement.classList.add("d-none");
    const id = e.target.value;
    const newArray = articleTagArray.filter((tag) => tag.id !== id);
    console.log(newArray);
    setArticleTagArray(newArray);
    sessionStorage.setItem("articleTagArray", JSON.stringify(articleTagArray));
  };

  const publishPost = async (published) => {
    const arr = quillValue.split("</");
    const title = arr[0].slice(4);
    let article = arr.slice(1);
    const closingTag = article[0].indexOf(">");
    article[0] = article[0].slice(closingTag + 1);
    article = article.join("</");
    console.log(title);
    try {
      const res = await axiosInstance
        .post("/articles", { title, article, published });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
          onClick={() => navigate("/posts")}
        />

        <LargeButton
          bgColor="transparent"
          color="black"
          width="24%"
          Text="Save as Draft"
          className="save"
          onClick={() => publishPost(false)}
        />

        <LargeButton
          // eslint-disable-next-line
          bgColor={editorState === "typing" ? "#1678F3" : "transparent"}
          color="white"
          width="24%"
          Text="Publish Article"
          className="publish"
          onClick={() => publishPost(true)}
        />

      </div>
      <div className="user">
        <img src={user} alt="" />
        <p className="userName">
          Solange Spencer
          <span
            style={{
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
      <div
        id="quillDiv"
        style={{
          paddingTop: 10
        }}
      >
        <div id="toolbar">
          <button type="button" className="ql-image">
            <input type="file" id="cover-image" onChange={fileChangeHandler} />
            <img src={AddPhoto} alt="" />
            Add cover image
          </button>
        </div>
        <div ref={quillRef} onChange={(e) => setQuillValue(e.target.value)} />
      </div>
      <PostFooter addTag={addTag} deleteTag={deleteTag} />
    </CreatePostContainer>
  );
};

export default CreatePosts;
