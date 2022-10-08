import { AllEmployeesContainer } from "./employees.style";
import EmployeesData from "./data";
import EmployeeList from "../../components/lists/employeeList/EmployeeListBox";

const AllEmployees = () => {
  return (
    <AllEmployeesContainer>
      <EmployeeList data={EmployeesData} />
    </AllEmployeesContainer>
  );
};

export default AllEmployees;
