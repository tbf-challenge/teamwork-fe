import styled from "styled-components";

const PagesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  .pages {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 0.3em;
    min-height: 90vh;
    /* background-color: yellow; */

    .sidebar {
      padding: 20px 10px;
      padding-right: 15px;
      background: #eef1f4;
    }

    .outlet {
      padding: 20px;
    }
  }
`;

export default PagesStyle;
