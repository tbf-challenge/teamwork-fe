import React from "react";
import ToggleBtnContainer from "./ToggleStyle";

const ToggleBtn = () => {
  return (
    <ToggleBtnContainer>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <div id="labelDiv">GRID</div>
      </label>
    </ToggleBtnContainer>
  );
};

export default ToggleBtn;
