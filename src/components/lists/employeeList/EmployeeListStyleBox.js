import styled from "styled-components";

const EmployeeListStyle = styled.li`
  .grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 80px 0.2fr;

    li {
      display: flex;
      justify-content: center;
      overflow-x: hidden;
    }
  }
  .body {
    .body_title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
    }

    :nth-child(odd) {
      background-color: #fff;
    }

    .full_name {
      padding-left: 10%;
      display: flex;
      justify-content: start;

      img {
        margin-right: 5%;
      }
    }
  }
`;

export default EmployeeListStyle;
