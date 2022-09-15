import styled from "styled-components";
import { EmployeesWrapper, EmployeesContainer } from "../employees/employees.style";

const SignUpStyles = styled(EmployeesContainer)`
  min-height: 100%;
  min-width: 100%;
  padding-left: 0;
  
  >h1 {
    text-align: center;
    margin-top: 20px;
  }
`;

export default SignUpStyles;

export const SignUpWrapper = styled(EmployeesWrapper)`
  margin: 5%;
  margin-top: 1%;
  padding: 1%;

  form {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 20px;
    padding-top:20px;
  }
`;
