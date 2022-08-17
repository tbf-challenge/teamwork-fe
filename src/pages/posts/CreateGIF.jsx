import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import React from "react";
import LargeButton from "../../components/button/LargeButton";
import MediumButton from "../../components/button/MediumButton";
import Back from "../../Assets/Back.svg";
import image1 from "../../Assets/image1.svg";
import GIF from "../../Assets/GIF.svg";
import image3 from "../../Assets/image3.svg";
import user from "../../Assets/User Profile.png";
import CreateGIFContainer from "./createGIF.styles";

const CreateGIF = ({ postGIF }) => {
  const navigate = useNavigate();

  return (
    <CreateGIFContainer postGIF={postGIF}>
      <div className="submitRow">
        <MediumButton
          width="120px"
          bgColor="transparent"
          iconLeft={Back}
          color="black"
          left="0"
          Text="Post GIF"
          top="17px"
          padding="0 20px"
          className="back"
          onClick={() => navigate("/")}
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
          bgColor={"#F3F4F6"}
          color="#D2D5DA"
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
        <textarea name="caption" id="" cols="60" rows="25" placeholder="Please share your thoughts..." />
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
    </CreateGIFContainer>
  );
};

CreateGIF.propTypes = { postGIF: PropTypes.string.isRequired };

export default CreateGIF;
