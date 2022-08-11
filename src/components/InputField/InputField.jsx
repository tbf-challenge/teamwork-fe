import PropTypes from "prop-types";
import React from "react";
import InputContainer from "./inputField.styles";

const InputField = ({
  type, placeholder, label, id, width, textLeft,
  textRight, imgLeft, imgRight, border, value, onChange, color
}) => {
  return (
    <InputContainer width={width} border={border} color={color}>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} value={value} onChange={onChange} />
      <img src={imgLeft} className="iconLeft" alt="" />
      <img src={imgRight} className="iconRight" alt="" />
      <div className="statusText">
        <p>{textLeft}</p>
        <p>{textRight}</p>
      </div>
    </InputContainer>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
  imgLeft: PropTypes.string,
  imgRight: PropTypes.string,
  border: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

InputField.defaultProps = {
  placeholder: "",
  label: "",
  id: "",
  textLeft: "",
  textRight: "",
  imgLeft: "",
  imgRight: "",
  onChange: 1 + 1
};

export default InputField;
