import { AllEmployeesContainer, ListLayout } from "./employees.style";
import EmployeesData from "./data";
import EmployeeList from "../../components/lists/employeeList/EmployeeListBox";

const AllEmployees = () => {
  return (
    <AllEmployeesContainer>
      <ListLayout>
        <EmployeeList data={EmployeesData} />
      </ListLayout>
    </AllEmployeesContainer>
  );
};

export default AllEmployees;
