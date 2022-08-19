import React from "react";
import EmployeeGridContainer from "./EmplyeeGridBoxStyle";

const EmployeeGrid = ({
  fullName,
  username,
  department,
  imgSrc,
  jobRole,
  img,
  status
}) => {
  return (
    <EmployeeGridContainer>
      <div className="main">
        <div className="info">
          <p className="status">{status}</p>
          <img src={imgSrc} alt={img} />
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
    </EmployeeGridContainer>
  );
};

export default EmployeeGrid;
