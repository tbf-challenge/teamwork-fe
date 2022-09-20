import {
  EmployeesContainer,
  AllEmployeesContainer,
  ListLayout
} from "./employees.style";
import EmployeesData from "./data";
import EmployeeList from "../../components/lists/employeeList/EmployeeListBox";

const AllEmployees = () => {
  return (
    <EmployeesContainer>
      <AllEmployeesContainer>
        <ListLayout>
          <EmployeeList data={EmployeesData} />
        </ListLayout>
      </AllEmployeesContainer>
    </EmployeesContainer>
  );
};

export default AllEmployees;
