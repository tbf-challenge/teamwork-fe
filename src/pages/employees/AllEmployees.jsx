import {
  EmployeesContainer,
  AllEmployeesContainer,
  ListLayout
} from "./employees.style";
import EmployeesData from "./data";
import EmployeeList from "../../components/lists/employeeList/EmployeeListBox";
// import Categories from "../categories/Categories";

const AllEmployees = () => {
  return (
    <EmployeesContainer className="mainSection">
      <AllEmployeesContainer>
        <ListLayout>
          <EmployeeList data={EmployeesData} />
        </ListLayout>
        {/* <Categories /> */}
      </AllEmployeesContainer>
    </EmployeesContainer>
  );
};

export default AllEmployees;
