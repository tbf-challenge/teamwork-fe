import React from "react";
import EmployeeGridBoxContainer from "./EmplyeeGridBoxStyle";
import myimg from "../../Assets/Avatar.svg";

const EmployeeGrid = ({ data }) => {
  return data.map(
    ({
      fullName, username, department, jobRole, status, img
    }) => (
      <EmployeeGridBoxContainer>
        <div className="main">
          <div className="info">
            <p className={`status ${status === "Online" ? "online" : ""}`}>{status}</p>
            <div className="imgContainer">
              <img src={myimg} alt={img} />
            </div>
            <p>{fullName}</p>
            <p>{username}</p>
          </div>
          <div className="position">
            <div>
              <small>Department</small>
              <p>{department}</p>
            </div>
            <div>
              <small className="jobTitle">Job Title</small>
              <p className="jobTitle">{jobRole}</p>
            </div>
          </div>
        </div>
      </EmployeeGridBoxContainer>
    )
  );
};

export default EmployeeGrid;
