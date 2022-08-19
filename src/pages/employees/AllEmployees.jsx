import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EmployeesContainer,
  AllEmployeesContainer,
  ListLayout,
  GridLayout
} from "./employees.style";
import ToggleBtn from "../../components/buttons/toggleButton/ToggleBtn";
import EmployeesData from "./data";
import EmployeeList from "../../components/lists/employeeList/EmployeeListBox";
import EmployeeGrid from "../../components/grid/EmployeeGridBox";

const AllEmployees = () => {
  const [isGrid, setIsGrid] = useState(true);
  const HEADERS = ["Full Name", "Username", "Department", "Job Role", "Status"];

  const handleGridClick = (e) => {
    e.preventDefault();
    setIsGrid(!isGrid);
  };

  return (
    <EmployeesContainer>
      <div className="top">
        <h4>All Employees</h4>
        <ToggleBtn Click={handleGridClick} isGrid={isGrid} />
        <Link to="/employees/create" id="createBtn" type="button">
          Create Employee
        </Link>
      </div>
      <AllEmployeesContainer isGrid={isGrid}>
        {isGrid ? (
          <GridLayout>
            <EmployeeGrid data={EmployeesData} />
          </GridLayout>
        ) : (
          <ListLayout>
            <EmployeeList headers={HEADERS} data={EmployeesData} />
          </ListLayout>
        )}
      </AllEmployeesContainer>
    </EmployeesContainer>
  );
};

export default AllEmployees;
