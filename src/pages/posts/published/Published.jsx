import React from "react";
import PublishContainer from "./published.styles";
import UserProfile from "../../../components/userProfile/UserProfile";
import userPosts from "../data";

const Published = () => {
  return (
    <div>
      <div>
        <PublishContainer>
          {userPosts.map((user) => (
            <UserProfile
              key={user.id}
              name={user.name}
              userPhoto={user.userPhoto}
              userHandle={user.userHandle}
              publishedDate={user.publishedDate}
              heading={user.heading}
              message={user.message}
              imagePost={user.imagePost}
              icon={user.icon}
            />
          ))}
        </PublishContainer>
      </div>
    </div>
  );
};

export default Published;
