import styled from "styled-components";

const NavStyle = styled.div`
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;

  .logoWrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eef1f4;

    h1 {
      font-size: 20px;
      margin-left: 5px;
    }
  }

  .headWrap {
    display: flex;
    align-items: flex-end;
    padding-left: 5px;
    width: 100%;
    height: 100%;

    .head {
      border: 0.5px solid rgba(0, 0, 0, 0.15);
      width: 98%;
      height: 70%;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 4px;
      padding: 5px;

      .title {
      }

      .search {
        width: 40%;
        height: 100%;
        display: flex;
        border-radius: 2px;
        border: 0.9px solid rgba(0, 0, 0, 0.15);

        .searchInput {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          outline: none;
          padding: 5px 15px;

          ::placeholder {
            /* for styling placeholder */
            color: red;
            /* padding-left: 5px; */
          }
        }
      }

      .icons {
        display: flex;
      }
    }
  }
`;

export default NavStyle;
