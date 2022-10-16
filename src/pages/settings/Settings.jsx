import { useState } from "react";
import SettingsStyles from "./settings.styles";
import Settingsreal from "./settingscode";
import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";
import NotifSettings from "./NotifSettings";

const Settings = () => {
  const [active, setActive] = useState("profile");

  return (
    <SettingsStyles>
      {/* eslint-disable-next-line */}
      <h3 className="pageTitle">{active === "password" ? "Password" : active === "notifs" ? "Notifications" : "My Profile"}</h3>
      <Settingsreal onclick={(option) => setActive(option)} active={active} />
      <div className="mainSettings">
        {/* eslint-disable-next-line */}
        {active === "password" ? <PasswordSettings /> : active === "notifs" ? <NotifSettings /> : <ProfileSettings />}
      </div>
    </SettingsStyles>
  );
};

export default Settings;
