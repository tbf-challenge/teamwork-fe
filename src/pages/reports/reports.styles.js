import styled from "styled-components";

const ReportsStyles = {
  Wrapper: styled.div`
  font-family: var(--Base-Family)
  `,

  Heading: styled.div`
  height: 50px;
  border-bottom: thin solid var(--Gray-Color-300);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 5%
  `,

  BackButton: styled.button`
  outline: none;
  background: none;
  cusrsor: pointer;
  `,

  Typography: {
    NavH1: styled.h1`
    font-size: 0.9em;
    margin-top: -4px;
    `
  },

  Body: styled.div`
  padding: 16px 12px
  `,

  CardsContainer: styled.div`
  padding: 24px 6px;
  border-radius: 8px;
  border: thin solid var(--Gray-Color-200);
  display: grid;
  grid-template-column: 1fr;
  gap: 32px;
  `,

  Card: {
    Wrapper: styled.div`
    border: thin solid var(--Gray-Color-200);
    border-radius: 6px;
    `,

    Heading: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 24px 8px 8px 8px;
    border-bottom: thin solid var(--Gray-Color-200);

    > div {
      width: 40px;
      height: 40px;
    };

    > div > img {
      width: 100%;
    }

    > span {
      flex-grow: 1;
      font-size: 1em;
      font-weight: 700;
      line-height: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;    
    };

    > button {
      outline: none;
      background: none;
      cursor: pointer;
    }
    `,

    Body: styled.div`
    padding: 24px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    `,

    Item: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      color: rgba(0,0,0, 0.8);
      font-size: 0.98em;
      font-weight: 400;
    };

    span {
      font-size: 0.9em;
      font-weight: 700;
    }
    `
  }
};

export default ReportsStyles;
