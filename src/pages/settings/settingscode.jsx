import { useRef } from "react";
import "./settings.css";
import Human from "../../Assets/images/settings-person.svg";
import Bell from "../../Assets/images/settings-notifications.svg";
import Lock from "../../Assets/images/settings-lock_outline.svg";
import profile from "../../Assets/images/User Profile.png";
import plus from "../../Assets/images/settings-plus.svg";
import upload from "../../Assets/images/upload-img.svg";

const Settingsreal = ({ onclick, active }) => {
  const pfpRef = useRef();
  const fileChangeHandler = async (e) => {
    console.log(e.target.files);
    if (e.target.files.length <= 1) {
      const lastImg = e.target.files[0];
      const src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(lastImg);
        reader.onload = () => resolve(reader.result);
      });
      pfpRef.current.src = src;
    }
  };

  return (
    <div className="mainwork">
      <div className="profilePic">
        <div><img src={profile} alt="" ref={pfpRef} className="profileImg" /></div>
        <button type="button">
          <img src={plus} alt="" />
        </button>
      </div>
      <div>
        <h3>Solange Spencer</h3>
        <p>Product Designer</p>
      </div>
      <button type="button" className="upload">
        <input type="file" id="cover-image" onChange={fileChangeHandler} />
        <img src={upload} alt="" />
        Upload Picture
      </button>
      <button type="button" className={active === "profile" ? "setting-nav active" : "setting-nav"} onClick={() => onclick("profile")}>
        <img className="logo" src={Human} alt="icon_human" />
        <div className="note">Profile</div>
      </button>
      <button type="button" className={active === "password" ? "setting-nav active" : "setting-nav"} onClick={() => onclick("password")}>
        <img className="logo" src={Lock} alt="lock_pattern" />
        <div className="note">Password</div>
      </button>
      <button type="button" className={active === "notifications" ? "setting-nav active" : "setting-nav"} onClick={() => onclick("notifs")}>
        <img className="logo" src={Bell} alt="bell_pattern" />
        <div className="note">Notification</div>
      </button>
    </div>
  );
};

export default Settingsreal;
