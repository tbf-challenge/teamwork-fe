import { useRef, useState, useEffect } from "react";
import { ProfileSettings as ProfileContainer } from "./settings.styles";
import Edit from "../../Assets/images/settings-edit.svg";
import Email from "../../Assets/images/settings-email.svg";
import useGeneralStore from "../../context/GeneralContext";
import useAxios from "../../hooks/useAxios";

const {
  Container, Heading, Info, InputGroup, Button
} = ProfileContainer;

const ProfileSettings = () => {
  const { user } = useGeneralStore();
  const [userData, setUserData] = useState(user);
  const [displayBtn, setDisplayBtn] = useState("none");
  const formRef = useRef();
  const editRef = useRef();
  const axiosInstance = useAxios();
  const {
    userId, firstName, lastName, email
  } = userData;

  // onchange function for any value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEdit = () => {
    setDisplayBtn("block");
  };

  const handleUpdate = async () => {
    try {
      const res = await axiosInstance.patch(`/users/${userId}`, { firstName, lastName });
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setDisplayBtn("none");
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <Heading>
        <h5>Account Information</h5>
        <p>Update your account information</p>
      </Heading>
      <Info>
        <h4>Personal Information</h4>
        <button type="button" onClick={handleEdit} ref={editRef} style={{ visibility: displayBtn === "block" && "hidden" }}>
          <img src={Edit} alt="" />
          Edit
        </button>
      </Info>
      <form id="profileForm" ref={formRef}>
        <InputGroup>
          <label htmlFor="firstName">First name</label>
          <input type="text" defaultValue={firstName} name="firstName" onChange={handleChange} disabled={displayBtn === "none" && true} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="lastName">Last name</label>
          <input type="text" defaultValue={lastName} name="lastName" onChange={handleChange} disabled={displayBtn === "none" && true} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="userName">User name</label>
          <input type="text" defaultValue={firstName + lastName} name="userName" onChange={handleChange} disabled={displayBtn === "none" && true} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" defaultValue={email} name="email" id="email" onChange={handleChange} disabled={displayBtn === "none" && true} />
            <img src={Email} alt="" id="emailIcon" />
          </div>
        </InputGroup>
        <Button displayBtn={displayBtn} onClick={handleUpdate} type="button" className="update">Update</Button>
      </form>
    </Container>
  );
};

export default ProfileSettings;
