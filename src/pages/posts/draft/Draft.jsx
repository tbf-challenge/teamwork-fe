import React from "react";
import DraftContainer from "./draft.styles";
import PostTopBar from "../../../components/postTopBar/PostTopBar";
import userPosts from "../data";
import UserDraft from "../../../components/userDraft/UserDraft";
import PostStyle from "../posts.styles";

const Draft = () => {
  return (
    <PostStyle>
      <PostTopBar />
      <DraftContainer>
        {userPosts.map((user) => (
          <UserDraft
            key={user.id}
            name={user.name}
            userPhoto={user.userPhoto}
            userHandle={user.userHandle}
            editedDate={user.editedDate}
            draftHeading={user.draftHeading}
            draftMessage={user.draftMessage}
            draftImage={user.draftImage}
            icon={user.icon}
          />
        ))}
      </DraftContainer>
    </PostStyle>
  );
};

export default Draft;
