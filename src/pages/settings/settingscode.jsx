import { useState } from "react";
import "./settings.css";
import Human from "../../Assets/images/settings-person.svg";
import Bell from "../../Assets/images/settings-notifications.svg";
import Lock from "../../Assets/images/settings-lock_outline.svg";
import profile from "../../Assets/images/User Profile.png";
import plus from "../../Assets/images/settings-plus.svg";
import upload from "../../Assets/images/upload-img.svg";
import useGeneralStore from "../../context/GeneralContext";
import Spinner from "../../components/spinner/Spinner";
import useAxios from "../../hooks/useAxios";

const Settingsreal = ({ onclick, active }) => {
  const [loading, setIsLoading] = useState(false);
  const { user, setUser } = useGeneralStore();
  const {
    profilePictureUrl, firstName, lastName, jobRole, userId
  } = user;
  const axiosInstance = useAxios();
  const fullName = `${firstName} ${lastName}`;

  const uploadImg = async (img) => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.patch(`/users/${userId}`, { profilePictureUrl: img });
      console.log(res);
    } catch (err) {
      console.error(err, loading);
      setIsLoading(false);
    } finally {
      setUser({ ...user, profilePictureUrl: img });
      setIsLoading(false);
    }
  };

  const fileChangeHandler = async (e) => {
    try {
      const lastImg = e.target.files[0];
      const src = await new Promise((resolve) => {
        // eslint-disable-next-line no-undef
        const reader = new FileReader();
        reader.readAsDataURL(lastImg);
        reader.onload = () => resolve(reader.result);
      });
      uploadImg(src);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mainwork">
      <div className="profilePic">
        <div>
          {
          loading
            ? (<Spinner color="blue" />)
            : (
              <img src={profilePictureUrl || profile} alt="" className="profileImg" />
            )
          }
        </div>
        <button type="button">
          <img src={plus} alt="" />
        </button>
      </div>
      <div>
        <h3>{(fullName && fullName) || "Solange Spencer"}</h3>
        <p>{jobRole || "Product Designer"}</p>
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
