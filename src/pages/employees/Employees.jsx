import axios from "axios";
import ReactLoading from "react-loading";
import swal from "sweetalert";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { EmployeesContainer, EmployeesWrapper } from "./employees.style";

const Employees = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jobRole: "",
    department: "",
    address: "",
    gender: ""
  };

  const [userData, setUserData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const {
      name, value, type, checked
    } = e.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const employee = userData;
    await axios
      .post("https://team-worker.herokuapp.com/api/v1/auth/create-user", employee)
      .then((response) => {
        const status = response;
        setIsLoading(false);
        swal({
          title: `${status?.data?.status}`,
          text: `${status?.data?.data?.message}`,
          icon: "success",
          button: "Ok"
        });
      })
      .catch((error) => {
        const errorMessage = error;
        setIsLoading(false);
        swal({
          title: `${errorMessage?.response?.data?.status}`,
          text: `${errorMessage?.response?.data?.error?.message}`,
          icon: "warning",
          button: "Ok"
        });
      });
  };
  return (
    <EmployeesContainer>
      <h1>Employees</h1>
      <EmployeesWrapper>
        <form onSubmit={handleSubmit}>
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
                placeholder="enter employee first name"
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
                placeholder="enter employee last name"
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
                placeholder="enter employee email"
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="inputBox"
                required
                value={userData.password}
                onChange={handleChange}
                pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}"
                placeholder="enter employee password"
                title="password must be atleat 8 charcters, contain lower case, uppercase, numbers and special characters"
              />
              <div className="show">
                {showPassword
                  ? <BiHide onClick={() => setShowPassword((prev) => !prev)} />
                  : <BiShow onClick={() => setShowPassword((prev) => !prev)} />}
              </div>
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
                placeholder="enter employee's job role"
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
                placeholder="enter employee's department"
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
              placeholder="enter employee's address"
            />
          </div>

          <button type="submit" className="submitButton">
            Create Account
          </button>

          <div className="isLoading">
            {isLoading && (<ReactLoading type="spin" color="black" />)}
          </div>
        </form>
      </EmployeesWrapper>
    </EmployeesContainer>
  );
};

export default Employees;
