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
import myimg from "../../Assets/Avatar.svg";

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
            {EmployeesData.map(
              ({
                fullName, username, department, jobRole, status, img
              }) => (
                <EmployeeGrid
                  fullName={fullName}
                  username={username}
                  department={department}
                  jobRole={jobRole}
                  status={status}
                  imgSrc={myimg}
                  img={img}
                />
              )
            )}
            {/* <EmployeeGrid data={EmployeesData} /> */}
          </GridLayout>
        ) : (
          <ListLayout>
            <li className="headers grid">
              {HEADERS.map((item) => (
                <div key={item} className="header_title">
                  <p>{item}</p>
                </div>
              ))}
            </li>
            <EmployeeList data={EmployeesData} />
          </ListLayout>
        )}
      </AllEmployeesContainer>
    </EmployeesContainer>
  );
};

export default AllEmployees;
