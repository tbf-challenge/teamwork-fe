import React from "react";
import Vert from "../../../Assets/images/more-vertical.svg";
import Solange from "../../../Assets/images/User Profile.png";
import DraftContainer from "./draft.styles";
import Image2 from "../../../Assets/jamespost.svg";
import Image1 from "../../../Assets/delepost.svg";
import Image3 from "../../../Assets/Article Image.svg";

const Draft = () => {
  return (
    <div>
      {/* === First Post === */}
      <DraftContainer>
        <div className="profile">
          <div className="user_info">
            <img src={Solange} alt="" />
            <div className="details">
              <div className="username">
                <h1>Solange Spencer</h1>
                <p>@ASA</p>
              </div>
              <p>Last edited 10 days ago</p>
            </div>
          </div>
          <img src={Vert} alt="" />
        </div>
        <div className="post">
          <h1>Why Should Anyone Be Led by You? </h1>
          <p>
            We all know that leaders need vision and energy. But to be inspirational,
            leaders need four other qu...
          </p>
        </div>
        <div className="post_img">
          <img src={Image1} alt="" />
        </div>
        <div className="footer">
          <div className="footer_details">
            <p>10 mins read</p>
          </div>
        </div>
      </DraftContainer>
      {/* === Second Post ==== */}
      <DraftContainer>
        <div className="profile">
          <div className="user_info">
            <img src={Solange} alt="" />
            <div className="details">
              <div className="username">
                <h1>Solange Spencer</h1>
                <p>@ASA</p>
              </div>
              <p>Created 2 months ago</p>
            </div>
          </div>
          <img src={Vert} alt="" />
        </div>
        <div className="post">
          <p>
            The Bitcon conference is kicking off tomorrow.
          </p>
        </div>
        <div className="post_img_3">
          <img src={Image2} alt="" />
        </div>
      </DraftContainer>
      {/* === Third Post === */}
      <DraftContainer>
        <div className="profile">
          <div className="user_info">
            <img src={Solange} alt="" />
            <div className="details">
              <div className="username">
                <h1>Solange Spencer</h1>
                <p>@ASA</p>
              </div>
              <p>Last edited 2 months ago</p>
            </div>
          </div>
          <img src={Vert} alt="" />
        </div>
        <div className="post">
          <h1>How Different Industries Can Use a Small Business Loan</h1>
          <p>
            When running a successful small business, there will always be room for improvement.
          </p>
        </div>
        <div className="post_img">
          <img src={Image3} alt="" />
        </div>
        <div className="footer">
          <div className="footer_details">
            <h3>Business</h3>
            <p>5 mins read</p>
          </div>
        </div>
      </DraftContainer>
    </div>
  );
};

export default Draft;
