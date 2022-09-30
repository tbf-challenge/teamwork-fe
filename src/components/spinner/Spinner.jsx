import React from "react";
import SpinnerStyle from "./SpinnerStyle";

const Spinner = ({ text, color }) => {
  return (
    <SpinnerStyle color={color || "#1678f3"}>
      <div className="main">
        <div className="spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <h2>{text}</h2>
      </div>
    </SpinnerStyle>
  );
};

export default Spinner;
