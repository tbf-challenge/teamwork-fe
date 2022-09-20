import styled from "styled-components";
import { Link } from "react-router-dom";

const ReportsStyles = {
  Wrapper: styled.div`
  font-family: var(--Base-Family);
  padding: 8px 4%;
  font-size: 1rem;
  
  @media(min-width: 578px) {
    padding: 8px;
    max-width: 960px;
  }
  `,

  Header: styled.header`
  width: 100%;
  margin-bottom: 16px;

  h1 {
    font-size: 1.25em;
    margin-bottom: 0.75rem;
    padding-left: 5px;
  };
  `,

  Nav: styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: thin solid var(--Gray-Color-200);

  @media(min-width: 578px) {
    justify-content: flex-start;
    gap: 16px;
  }
  `,

  NavButton: styled.button`
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0 8px 5px;
  position: relative;
  color: ${(props) => (props.active ? "var(--Pure-Black)" : "var(--Text-Body-Color)")};
  display: flex;
  align-items: center;
  gap: 2.5px;
  font-size: 0.9em;
  transition: all 0.25s ease-in-out;

  span {
    font-size: 0.75em;
    padding: 0.05rem 0.5rem;
    border: thin solid;
    border-radius: 2rem;
  };

  &:first-child span {
    border-color: var(--Primary-Color-500);
  };
  &:nth-child(2) span {
    border-color: var(--Info-Color-600);
  };
  &:last-child span {
    border-color: var(--Success-Color-600);
  };

  &::after {
    content: ${(props) => (props.active ? "''" : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--Gray-Color-700);
  };
  `,

  Main: styled.div`
  display: grid;
  gap: 16px;
  `,

  Card: {
    Wrapper: styled(Link)`
    border: thin solid var(--Gray-Color-300);
    border-radius: 12px;
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    text-decoration: none;
    color: unset;
    `,

    Header: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    .img-wrapper {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
      }
    };

    span {
      font-size: 0.8em;
    }
    `,

    Body: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 12px;

    .post-content {
      h4 {
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.8em;
        color: var(--Text-Body-Color);
      }
    };

    .post-img-wrapper img {
        width: 100%;
        max-width: 100px;
        max-height: 100px;
        border-radius: 5px;
    };

    @media(min-width: 578px) {
      grid-template-columns: 8fr 2fr;
      gap: 32px;

      .post-content {
        padding-right: 48px;

        h4 {
          font-size: 1.5em;
          margin-bottom: 1rem;
        }

        p {
          font-size: 0.95em
        }
      }
    }
    `,

    Footer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .reporters {
      position: relative;
      height: 30px;
      width: 30px;

      img {
        height: 100%;
        position: absolute;
        right: 0;
      }
    }

    @media (min-width: 578px) {
      width: 70%
    }
    `,

    ReportBadge: styled.span`
    font-size: 0.9em;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: ${(props) => (`var(--${[props.color]}-Color-600)`)};
    background-color: ${(props) => (`var(--${[props.color]}-Color-50)`)};
    `
  }
};

export default ReportsStyles;
