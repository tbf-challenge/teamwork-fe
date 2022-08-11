import { useState } from "react";
import { EmployeesContainer, EmployeesWrapper } from "./employees.style";

const Employees = () => {
  const initialData = [
    { firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobRole: "",
      department: "",
      address: "",
      gender: "" }
  ];

  const [userData, setUserData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <EmployeesContainer>
      <h1>Employees</h1>
      <EmployeesWrapper>
        <form>
          <div className="rowDiv">
            <div className="inputDiv">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                className="inputBox"
                id="firstName"
                required
                value={userData.firstName}
                onChange={handleChange}
                minLength={3}
              />
            </div>

            <div className="inputDiv">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="">Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                className="inputBox"
                required
                id="lastName"
                onChange={handleChange}
                value={userData.lastName}
                minLength={3}
              />
            </div>
          </div>

          <div className="rowDiv">
            <div className="inputDiv">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                className="inputBox"
                required
                value={userData.email}
                onChange={handleChange}
              />
            </div>

            <div className="inputDiv">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="inputBox"
                required
                value={userData.password}
                onChange={handleChange}
                minLength={8}
                // pattern='[a-zA-z0-9]{8}'
                title="password must contain lower case,
                        uppercase, numbers and special characters"
              />
            </div>
          </div>

          <div className="radioDiv">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="genderTitle">Gender</label>
            <div className="radio">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={handleChange}
              />

              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="male" className="radioInputLabel">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="female" className="radioInputLabel">
                Female
              </label>
            </div>
          </div>

          <div className="rowDiv">
            <div className="inputDiv">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Job Role</label>
              <br />
              <input
                type="text"
                name="jobRole"
                className="inputBox"
                value={userData.jobRole}
                onChange={handleChange}
              />
            </div>

            <div className="inputDiv">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Department</label>
              <br />
              <input
                type="text"
                name="department"
                className="inputBox"
                value={userData.department}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="addressDiv">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Address</label>
            <br />
            <input
              type="text"
              name="address"
              className="inputRegister"
              value={userData.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submitButton">
            Create Account
          </button>
        </form>
      </EmployeesWrapper>
    </EmployeesContainer>
  );
};

export default Employees;
