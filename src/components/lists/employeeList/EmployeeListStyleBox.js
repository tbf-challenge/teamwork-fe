import styled from "styled-components";

export const ListWrap = styled.div`
  background-color: white;
  .boxes {
    display: none;
  }

  @media screen and (max-width: 920px) {
    .grid {
      display: none;
    }

    .boxes {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 20px;
      list-style-type: none;
      background-color: white;
      justify-content: center;
      align-items: center;

      .box {
        position: relative;
        width: 393px;
        height: 112px;
        background: #fdfdfd;
        box-shadow: 0.58156px 2.9078px 2.32624px rgba(0, 0, 0, 0.25);
        border-radius: 11.0496px;
        /* background-color: yellowgreen; */

        img {
          position: absolute;
          left: 5.46%;
          right: 80.89%;
          top: 14.29%;
          bottom: 50%;

          background: url(.jpg);
          /* Primary Color/primary 100 */

          border: 1px solid #c7dffc;
          border-radius: 24px;
        }

        .name {
          position: absolute;
          left: 27.3%;
          right: 11.26%;
          top: 14.29%;
          bottom: 67.86%;
          display: flex;
          justify-content: space-around;
        }

        .position {
          position: absolute;
          left: 27.3%;
          right: 9.22%;
          top: 46.43%;
          bottom: 35.71%;
          display: flex;
          justify-content: space-around;
        }

        .status {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 8px;
          position: absolute;
          left: 27.3%;
          right: 54.61%;
          top: 71.43%;
          bottom: 10.71%;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .boxes {
      .box {
        font-size: 0.9rem;
        width: 293px;

        .status {
          font-size: 0.7rem;
        }
      }
    }
  }
`;

const EmployeeListStyle = styled.li`
  .grid {
    display: flex;
    justify-content: space-between;

    .online {
      color: #22c55e;
    }

    li {
      display: flex;
      justify-content: center;
      overflow-x: hidden;
    }
  }
  .card_head {
    display: flex;
  }
  .card_body {
    padding: 20px 0;
  }

  .card_title {
    margin-top: 5px;
    margin-left: 45px;
  }
  .card_title p {
    padding: 0px 5px;
    font-size: 13px
  }
  .box-title img {
    width: 70px;
    height: 70px;
  }
  .body_head {
    display: flex;
    margin-top: 5px;
    margin-left: 10px;
    flex-direction: column;
    text-align: left;
  }
  .body {
    .body_title {
      display: flex;
      font-size: 16px;
    }

    .full_name {
      padding-left: 10%;
      display: flex;
      justify-content: start;

      img {
        margin-right: 10%;
      }
    }
  }

  @media screen and (max-width: 920px) {
    display: none;

    .grid {
      display: none;
    }
  }
`;

export default EmployeeListStyle;
