import react from 'react'
import {EmployeesContainer, EmployeesWrapper} from "./employees.style";
import {useState} from 'react'

const Employees = () => {

  const initialData = [
    {
      firstName :"",
      lastName:"",
      email:"",
      password:"",
      jobRole:"",
      department:"",
      address:"",
      gender:"",
    }
  ];

  const [userData,setUserData] = useState(initialData);

  const handleChange =(e)=>{
    const {name,value,type,checked}= e.target;
    setUserData({...userData,[name]
        : type ==="checkbox"
        ? checked
        : value});
  };

  return (
    <EmployeesContainer>
      <h1>Employees</h1>
      <EmployeesWrapper>
        <form>

          <div className="rowDiv">
            <div className="inputDiv">
              <label for="firstName">First Name</label>
              <br/>
                <input
                  type={"text"} name={"firstName"}
                  className="inputBox" required
                  value={userData.firstName}
                  onChange={handleChange}
                  minLength={3}
                />
            </div>

            <div className="inputDiv">
              <label for="lastName">Last Name</label>
              <br/>
                <input
                  type={"text"} name={"lastName"}
                  className="inputBox" required
                  onChange={handleChange}
                  value={userData.lastName}
                  minLength={3}
                />
            </div>
          </div>

          <div className="rowDiv">
            <div className="inputDiv">
              <label for="email">Email</label>
              <br/>
                <input
                  type={"email"} name={"email"}
                  className="inputBox" required
                  value={userData.email}
                  onChange={handleChange}
                />
            </div>

            <div className="inputDiv">
              <label for="password">Password</label>
              <br/>
                <input
                  type={"password"} name={"password"}
                  className="inputBox" required
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
            <label>Gender</label>
            <div className="radio">
              <input
                type={"radio"}
                name={"gender"}
                value={"male"} 
                onChange={handleChange}
              />
              <label for="male"
                className="radioInput"
              >
                Male
              </label>
              <input 
                type={"radio"}  
                name={"gender"}
                value={"female"}
                onChange={handleChange}
              />
              <label for="female"
                className="radioInput"
              >
                Female
              </label>
            </div>
          </div>

          <div className="rowDiv">
            <div className="inputDiv">
              <label for="jobRole">Job Role</label>
              <br/>
                <input
                  type={"text"} name={"jobRole"}
                  className="inputBox"
                  value={userData.jobRole}
                  onChange={handleChange} 
                />
            </div>

            <div className="inputDiv">
              <label for="department">Department</label>
              <br/>
                <input
                  type="text" name={"department"}
                  className="inputBox"
                  value={userData.department}
                  onChange={handleChange}
                />
            </div>
          </div>

          <div className="addressDiv">
            <label  for="address" >Address</label>
            <br/>
              <input
                type={"text"} name={"address"}
                className="inputRegister"
                value={userData.address}
                onChange={handleChange} 
              />
          </div>

          <button
            type={"submit"}
            className="submitButton"
          >
            Create Account
          </button>
        </form>
      </EmployeesWrapper>
    </EmployeesContainer>
  );
};

export default Employees;
