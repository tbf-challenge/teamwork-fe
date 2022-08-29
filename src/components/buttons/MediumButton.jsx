import PropTypes from "prop-types";
import ButtonStyle from "./ButtonStyle";

const MediumButton = ({
  Text, iconLeft, iconRight, onClick,
  bgColor, width, border, color, className,
  left, right, padding, bottom, top, style
}) => {
  return (
    <ButtonStyle
      height="48px"
      bgColor={bgColor}
      color={color}
      width={width}
      border={border}
      fontSize="16px"
      lineHeight="24px"
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      gap="8px"
      iconWidth="24px"
      onClick={onClick}
      padding={padding}
      className={className}
      style={style}
    >
      <button type="button" onClick={onClick}>
        {Text}
        <img src={iconLeft} alt="" className="imgLeft" />
        <img src={iconRight} alt="" className="imgRight" />
      </button>
    </ButtonStyle>
  );
};

MediumButton.propTypes = {
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
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object
};

MediumButton.defaultProps = {
  iconLeft: "",
  iconRight: "",
  top: "12px",
  left: "12px",
  border: "none",
  right: "12px",
  bottom: "12px",
  bgColor: "transparent",
  padding: "auto",
  className: "",
  onClick: () => 1 + 1,
  style: {}
};

export default MediumButton;
