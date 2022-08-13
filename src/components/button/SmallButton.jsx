import PropTypes from "prop-types";
import ButtonStyle from "./ButtonStyle";

const SmallButton = ({
  Text, iconLeft, iconRight, onClick,
  bgColor, width, border, color, className,
  left, right, padding, top, bottom
}) => {
  return (
    <ButtonStyle
      height="40px"
      bgColor={bgColor}
      color={color}
      width={width}
      border={border}
      fontSize="14px"
      lineHeight="20px"
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      gap="4px"
      iconWidth="16px"
      onClick={onClick}
      padding={padding}
      className={className}
    >
      <button type="button" onClick={onClick}>
        {Text}
        <img src={iconLeft} alt="" className="imgLeft" />
        <img src={iconRight} alt="" className="imgRight" />
      </button>
    </ButtonStyle>
  );
};

SmallButton.propTypes = {
  Text: PropTypes.string.isRequired,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.string.isRequired,
  border: PropTypes.string,
  color: PropTypes.string.isRequired,
  top: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
  className: PropTypes.string
};

SmallButton.defaultProps = {
  iconLeft: "",
  iconRight: "",
  top: "10px",
  border: "none",
  left: "12px",
  right: "12px",
  bottom: "10px",
  bgColor: "transparent",
  padding: "auto",
  className: "",
  onClick: () => 1 + 1
};

export default SmallButton;
