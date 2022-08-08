import React from "react";
import { EmployeesContainer, AllEmployeesContainer } from "./employees.style";
import Dots from "../../components/dots/Dots";
import EmployeesData from "./data";
import myimg from "../../Assets/Avatar.svg";

const AllEmployees = () => {
  const HEADERS = ["Full Name", "Username", "Department", "Job Role", "Status"];

  return (
    <EmployeesContainer>
      <h1>All Employees</h1>
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
              ({ full_name, username, department, job_role, status, img }) => (
                <li className="body grid">
                  <div className="body_title full_name">
                    <img src={myimg} alt={img} />
                    <p>{full_name}</p>
                  </div>
                  <div className="body_title">
                    <p>{username}</p>
                  </div>
                  <div className="body_title">
                    <p>{department}</p>
                  </div>
                  <div className="body_title">
                    <p>{job_role}</p>
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
