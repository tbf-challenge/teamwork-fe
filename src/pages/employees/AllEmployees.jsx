import { Link } from "react-router-dom";
import { EmployeesContainer, AllEmployeesContainer } from "./employees.style";
import Dots from "../../components/dots/Dots";
import EmployeesData from "./data";
import myimg from "../../Assets/Avatar.svg";

const AllEmployees = () => {
  const HEADERS = ["Full Name", "Username", "Department", "Job Role", "Status"];

  return (
    <EmployeesContainer>
      <div className="top">
        <h1>All Employees</h1>
        <Link to="/" id="createBtn" type="button">Create Employee</Link>
      </div>
      <AllEmployeesContainer>
        <ul>
          <li className="headers grid">
            {HEADERS.map((item) => (
              <div key={item} className="header_title">
                <p>{item}</p>
              </div>
            ))}
          </li>
          <li>
            {EmployeesData.map(
              ({
                fullName, username, department, jobRole, status, img
              }) => (
                <li className="body grid">
                  <div className="body_title full_name">
                    <img src={myimg} alt={img} />
                    <p>{fullName}</p>
                  </div>
                  <div className="body_title">
                    <p>{username}</p>
                  </div>
                  <div className="body_title">
                    <p>{department}</p>
                  </div>
                  <div className="body_title">
                    <p>{jobRole}</p>
                  </div>
                  <div className="body_title">
                    <p>{status}</p>
                  </div>
                  <Dots />
                </li>
              )
            )}
          </li>
        </ul>
      </AllEmployeesContainer>
    </EmployeesContainer>
  );
};

export default AllEmployees;
