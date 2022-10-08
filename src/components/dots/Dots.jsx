import DotsContainer from "./dot.style";

const Dots = ({ handleClick }) => {
  return (
    <DotsContainer onClick={handleClick}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </DotsContainer>
  );
};

export default Dots;
