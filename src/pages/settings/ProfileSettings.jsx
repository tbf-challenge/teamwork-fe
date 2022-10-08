import { useRef, useState } from "react";
import { ProfileSettings as ProfileContainer } from "./settings.styles";
import Edit from "../../Assets/images/settings-edit.svg";
import Email from "../../Assets/images/settings-email.svg";

const {
  Container, Heading, Info, InputGroup, Button
} = ProfileContainer;

const savedValues = {
  firstName: "Micheal", lastname: "Oseni", userName: "Milkil", email: "MichaelOseni@companyname.com"
};
const {
  firstName, lastname, userName, email
} = savedValues;

const ProfileSettings = () => {
  // eslint-disable-next-line
  const [userData, setUserData] = useState(savedValues);
  const [displayBtn, setDisplayBtn] = useState("none");
  const formRef = useRef();
  const editRef = useRef();

  // onchange function for any value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEdit = () => {
    setDisplayBtn("block");
    const inputs = formRef.current.querySelectorAll("input");
    inputs.forEach((input) => {
      input.removeAttribute("disabled");
    });
    editRef.current.style.visibility = "hidden";
  };

  const handleUpdate = () => {
    setDisplayBtn("none");
    const inputs = formRef.current.querySelectorAll("input");
    inputs.forEach((input) => {
      input.setAttribute("disabled", true);
    });
    editRef.current.style.visibility = "visible";
  };

  return (
    <Container>
      <Heading>
        <h5>Account Information</h5>
        <p>Update your account information</p>
      </Heading>
      <Info>
        <h4>Personal Information</h4>
        <button type="button" onClick={handleEdit} ref={editRef}>
          <img src={Edit} alt="" />
          Edit
        </button>
      </Info>
      <form id="profileForm" ref={formRef}>
        <InputGroup>
          <label htmlFor="firstName">First name</label>
          <input type="text" defaultValue={firstName} name="firstName" onChange={handleChange} disabled />
        </InputGroup>
        <InputGroup>
          <label htmlFor="lastName">Last name</label>
          <input type="text" defaultValue={lastname} name="lastName" onChange={handleChange} disabled />
        </InputGroup>
        <InputGroup>
          <label htmlFor="userName">User name</label>
          <input type="text" defaultValue={userName} name="userName" onChange={handleChange} disabled />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" defaultValue={email} name="email" id="email" onChange={handleChange} disabled />
            <img src={Email} alt="" id="emailIcon" />
          </div>
        </InputGroup>
        <Button displayBtn={displayBtn} onClick={handleUpdate} type="button" className="update">Update</Button>
      </form>
    </Container>
  );
};

export default ProfileSettings;
