import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;

  .pages {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 0.5em;
    min-height: 90vh;
    background-color: yellow;

    .sidebar {
    }

    .outlet {
      background-color: yellow;
    }
  }
`;

export default PagesStyle;
