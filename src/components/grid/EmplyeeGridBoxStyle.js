import styled from "styled-components";

const EmployeeGridBoxContainer = styled.div`
  width: 227px;
  height: 236px;
  /* min-height: 250px;
  min-width: 240px */
  padding: 12px 24px;
  gap: 12px;

  border: 0.8px solid #1678f3;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 12px;

  * {
    box-sizing: border-box;
  }

  .online {
    color: #22c55e;
  }

  .main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 75% 25%;
    align-items: center;
    /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.4); */
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;

    .status {
      position: absolute;
      top: 0;
      right: 0;
    }

    .imgContainer {
      width: 80px;
      height: 80px;
      background: url(.jpg), #ffffff;
      border-radius: 24px;
      border: 1px solid #c7dffc;
      overflow: hidden;

      img {
        /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35)); */
        width: 100%;
        height: 100%;

        /* Primary Color/primary 100 */

      }
    }
  }

  .position {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 4px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 1);
    /* white-space: nowrap; */
    /* gap: 5px; */

    /* Auto layout */

    /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    gap: 24px;

    width: 179px;
    height: 51px;

    background: #fcfcfc;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px; */

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      small {
        color: rgba(0, 0, 0, 0.8);
        font-size: 1em;
      }
      .jobTitle {
        text-align: end;
      }

      p {
        font-weight: 900;
        font-size: 1em;
      }
    }
  }

  /* Auto layout */
  /* 
align-items: center;
padding: 8px;
gap: 24px;

width: 179px;
height: 51px;

background: #FCFCFC;
border: 0.5px solid rgba(0, 0, 0, 0.1);
border-radius: 2px;


flex: none;
order: 1;
flex-grow: 0; */
`;
export default EmployeeGridBoxContainer;
