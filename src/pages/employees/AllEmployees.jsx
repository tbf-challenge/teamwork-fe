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
        <h4>
          <Link to="/">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.41 7.66L14 6.25L8 12.25L14 18.25L15.41 16.84L10.83 12.25L15.41 7.66Z"
                fill="black"
              />
            </svg>
            All Employees
          </Link>
        </h4>
        <div id="toggle">
          <ToggleBtn Click={handleGridClick} isGrid={isGrid} />
        </div>
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
