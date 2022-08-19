import React from "react";
import ToggleBtnContainer from "./ToggleStyle";

const ToggleBtn = ({ Click, isGrid }) => {
  return (
    <ToggleBtnContainer isGrid={isGrid} type="button" onClick={Click}>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <div id="labelDiv">GRID</div>
      </label>
    </ToggleBtnContainer>
  );
};

export default ToggleBtn;
