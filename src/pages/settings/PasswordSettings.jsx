import React, { useState } from "react";
import { ProfileSettings as PasswordContainer } from "./settings.styles";
import check from "../../Assets/images/check.svg";

const {
  Container, Heading, InputGroup, Button
} = PasswordContainer;

const PasswordSettings = () => {
  // eslint-disable-next-line
  const [oldPassword, setOldPassword] = useState("");
  // eslint-disable-next-line
  const [newPassword, setNewPassword] = useState("");
  // eslint-disable-next-line
  const [confirmPasword, setConfirmPassword] = useState("");

  const handleConfirm = (e) => {
    // eslint-disable-next-line
    e.preventDefault;
    if (newPassword && newPassword === confirmPasword) {
      e.target.removeAttribute("disabled");
    }
  };

  return (
    <Container>
      <Heading>
        <h5>Change Password</h5>
        <p>Add a new password for your account</p>
      </Heading>
      <form>
        <InputGroup>
          <label htmlFor="oldPassword">Old Password</label>
          <div>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <img src={check} alt="checked" className="checkMark" />
          </div>
        </InputGroup>
        <InputGroup>
          <label htmlFor="oldPassword">New Password</label>
          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <img
              src={check}
              alt="checked"
              className={newPassword && newPassword === confirmPasword ? "checkMark" : "checkMark hidden"}
            />
          </div>
        </InputGroup>
        <InputGroup>
          <label htmlFor="oldPassword">Confirm New Password</label>
          <div>
            <input
              type="password"
              value={confirmPasword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <img
              src={check}
              alt="checked"
              className={newPassword && newPassword === confirmPasword ? "checkMark" : "checkMark hidden"}
            />
          </div>
        </InputGroup>
        <Button
          className={(newPassword && newPassword === confirmPasword) ? "" : "disabled"}
          type="button"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </form>
    </Container>
  );
};

export default PasswordSettings;
