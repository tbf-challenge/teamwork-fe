import styled from "styled-components";

const ReportsInfoStyles = {
  Wrapper: styled.div`
  @media(min-width: 578px) {
    max-width: 960px;
  }
  `,

  Header: styled.header`
  padding: 16px 4%;
  border-bottom: thin solid var(--Gray-Color-200);
  margin-bottom: 24px;
  
  button {
    background: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1em;
    font-weight: 700;
  }

  @media(min-width: 578px) {
    padding: 16px 8px;
  }
  `,

  Container: styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 8px 4%;

  .post-content {
    h4 {
      font-size: 1.25em;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.95em;
    }
  }

  @media(min-width: 578px) {
    padding: 8px;

    .post-content {
      h4 {
        font-size: 1.35em;
      }
  
      p {
        font-size: 1em;
      }
    }
  }
  `,

  Footer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    h4 {
      color: var(--Gray-Color-500);
    }

    &.reporters {
      .user {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }

  @media (min-width: 578px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 16px;
  }
  `
};

export default ReportsInfoStyles;
