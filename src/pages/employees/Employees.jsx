import { useState } from "react";
import { EmployeesContainer, EmployeesWrapper } from "./employees.style";

const Employees = () => {
  const initialData = [
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobRole: "",
      department: "",
      address: "",
      gender: ""
    }
  ];

  const [userData, setUserData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const { type, checked } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };

  console.log(userData);
  return (
    <EmployeesContainer>
      <h1>Employees</h1>
      <EmployeesWrapper>
        <form>
          <div className="rowDiv">
            <div className="inputDiv">
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                className="inputBox"
                required
                value={userData.firstName}
                onChange={handleChange}
                minLength={3}
                placeholder="John"
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                className="inputBox"
                required
                onChange={handleChange}
                value={userData.lastName}
                minLength={3}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="rowDiv">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                className="inputBox"
                required
                value={userData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
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
                placeholder="********"
                title="password must contain lower case,
                        uppercase, numbers and special characters"
              />
            </div>
          </div>

          <div className="radioDiv">
            <label htmlFor="gender" className="genderTitle">
              Gender
            </label>

            <div className="radio">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={handleChange}
              />
              <label htmlFor="male" className="radioInput">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                onChange={handleChange}
              />
              <label htmlFor="female" className="radioInput">
                Female
              </label>
            </div>
          </div>

          <div className="rowDiv">
            <div className="inputDiv">
              <label htmlFor="jobRole">Job Role</label>
              <br />
              <input
                type="text"
                name="jobRole"
                className="inputBox"
                value={userData.jobRole}
                onChange={handleChange}
                placeholder="Senior Manager"
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="department">Department</label>
              <br />
              <input
                type="text"
                name="department"
                className="inputBox"
                value={userData.department}
                onChange={handleChange}
                placeholder="Managing Department"
              />
            </div>
          </div>

          <div className="addressDiv">
            <label htmlFor="address">Address</label>
            <br />
            <input
              type="text"
              name="address"
              className="inputRegister"
              value={userData.address}
              onChange={handleChange}
              placeholder="Rojitech Street, off Jida Road, Carl"
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
