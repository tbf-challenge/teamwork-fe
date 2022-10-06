import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ReactLoading from "react-loading";
import { BiHide, BiShow } from "react-icons/bi";
import SignUpStyles, { SignUpWrapper } from "./SignUpStyle";
import { signUp, validateToken } from "../../apis/requests";
import useGeneralStore from "../../context/GeneralContext";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const SignUp = () => {
  const [checkingValidity, setCheck] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setAccessToken: setGenAccessToken, setRefreshToken } = useGeneralStore();

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(userData);
    try {
      const res = await signUp(userData, accessToken);
      swal({
        title: `${res.data?.data?.message}`,
        icons: "success"
      });
      window.localStorage.setItem(
        "AUTH_VALUES",
        JSON.stringify({
          userId: res.data.data.userId,
          refreshToken: res.data.data.refreshToken
        })
      );
      setRefreshToken(res.data.data.refreshToken);
      setGenAccessToken(res.data.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      swal({
        title: `${error?.response?.data?.status}`,
        text: `${error?.response?.data?.message}`,
        icon: "warning"
      });
      if (error?.response?.staus === 422) {
        navigate("/login", { replace: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    const isTokenValid = async () => {
      try {
        const res = await validateToken(token);
        console.log(res);
        setAccessToken(res.data.data.accessToken);
        setUserData((prev) => ({ ...prev, email: res.data.data.email }));
      } catch (err) {
        swal({
          title: `${err?.response?.data.status}`,
          text: `${err?.response?.data.message}`,
          icon: "error"
        });
      } finally {
        setCheck(false);
      }
    };

    isTokenValid();
  }, [location]);

  if (checkingValidity) return <h1>Loading...</h1>;

  return (
    <SignUpStyles>
      <h1>Complete Your Information</h1>
      <SignUpWrapper>
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
                disabled
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

          <button type="submit" className="submitButton">
            Update Account
          </button>

          <div className="isLoading">
            {isLoading && (<ReactLoading type="spin" color="black" />)}
          </div>
        </form>
      </SignUpWrapper>
    </SignUpStyles>
  );
};

export default SignUp;
