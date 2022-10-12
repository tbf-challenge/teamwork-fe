import React from "react";
import UserContainer, {
  Image,
  PostWrapper,
  Reactions
} from "./userProfile.styles";
import Vert from "../../Assets/images/more-vertical.svg";
import Love from "../../Assets/love.svg";
import Message from "../../Assets/message.svg";
import Bookmark from "../../Assets/bookmark.svg";

const UserProfile = ({
  userPhoto,
  name,
  userHandle,
  publishedDate,
  icon,
  message,
  heading,
  imagePost
}) => {
  return (
    <div>
      <UserContainer>
        <div className="user_info">
          <img src={userPhoto} alt="" />
          <div className="details">
            <div className="username">
              <h1>{name}</h1>
              <p>{userHandle}</p>
            </div>
            <p>{publishedDate}</p>
          </div>
        </div>
        <img src={icon} alt="" />
      </UserContainer>
      <PostWrapper>
        <h1>{heading}</h1>
        <p>{message}</p>
      </PostWrapper>
      <Image>
        <img src={imagePost} alt="" />
      </Image>
      <Reactions>
        <div className="footer_details">
          <h3>UX</h3>
          <p>6 mins read</p>
        </div>
        <div className="footer_click">
          <div className="increment">
            <img src={Love} alt="" />
            <span>24</span>
          </div>
          <div className="increment">
            <img src={Message} alt="" />
            <span>1</span>
          </div>
          <div>
            <img src={Bookmark} alt="" />
          </div>
          <div>
            <img src={Vert} alt="" />
          </div>
        </div>
      </Reactions>
    </div>
  );
};

export default UserProfile;
