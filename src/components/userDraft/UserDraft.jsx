import React from "react";
import UserContainer, {
  Image,
  PostWrapper,
  Reactions
} from "./userDraft.styles";
// import Vert from "../../Assets/images/more-vertical.svg";
// import Love from "../../Assets/love.svg";
// import Message from "../../Assets/message.svg";
// import Bookmark from "../../Assets/bookmark.svg";

const UserDraft = ({
  userPhoto,
  name,
  userHandle,
  editedDate,
  icon,
  draftMessage,
  draftHeading,
  draftImage
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
            <p>{editedDate}</p>
          </div>
        </div>
        <img src={icon} alt="" />
      </UserContainer>
      <PostWrapper>
        <h1>{draftHeading}</h1>
        <p>{draftMessage}</p>
      </PostWrapper>
      <Image>
        <img src={draftImage} alt="" />
      </Image>
      <Reactions>
        <div className="footer_details">
          <h3>UX</h3>
          <p>6 mins read</p>
        </div>
      </Reactions>
    </div>
  );
};

export default UserDraft;
