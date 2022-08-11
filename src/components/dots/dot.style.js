import styled from "styled-components";

const DotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  gap: 1.5px;
  cursor: pointer;

  .dot {
    background-color: gray;
    width: 5px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`;

export default DotsContainer;
