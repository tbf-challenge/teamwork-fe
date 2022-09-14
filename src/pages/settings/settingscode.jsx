import "./settings.css";
import Human from "../../Assets/images/Avatar.svg";
import Bell from "../../Assets/images/Bell.svg";
import Lock from "../../Assets/images/lock_outline.svg";

const Settingsreal = () => {
  return (
    <div className="mainwork">
      <div className="firstone">
        <div className="note">Profile</div>
        <div className="icon">
          <img className="logo" src={Human} alt="icon_human" />
        </div>
      </div>

      <div className="secondone">
        <div className="note">Password</div>
        <div className="icon">
          <img className="logo" src={Lock} alt="lock_pattern" />
        </div>
      </div>

      <div className="thirdone">
        <div className="note">Notification</div>
        <div className="icon">
          <img className="logo" src={Bell} alt="bell_pattern" />
        </div>
      </div>
    </div>
  );
};
export default Settingsreal;
