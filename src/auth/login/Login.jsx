import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import LoginContainer from "./LoginStyle";
import img1 from "../../Assets/images/image 1.png";
import user from "../../Assets/images/email.png";
import lock from "../../Assets/images/Vector.png";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: "all"
  });

  const handleClick = () => {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const eMail = email.value;
    const pWord = password.value;
    if (eMail === "" || pWord === "") {
      swal({
        title: "Error",
        text: "Please fill in the missing field",
        icon: "warning",
        buttons: { cancel: true }
      });
    } else {
      swal({
        title: `Data submitted`,
        text: "your data has been successfully submitted",
        icon: "success",
        button: "Ok"
      });
    }
  };

  return (
    // classic string concatenation
    <LoginContainer>
      <div className="info">
        <h1>Log in to Teamwork</h1>
        <p>Forgot password?</p>
        <form
          id="ValidateForm"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <label htmlFor="email">Email</label>
          <br />
          <img src={user} alt="user" className="user" />
          <input
            type="text"
            name="email"
            placeholder="mail@Example.com"
            className="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Looks like this is not an email"
              }
            })}
          />
          <br />
          <span className="error-block">{errors.email?.message}</span>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <img src={lock} alt="lock" className="lock" />
          <input
            type="text"
            name="password"
            placeholder=" Enter Password"
            className="password"
            id="password"
            {...register("password", {
              required: "Password cannot be empty",
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                message: `Must contain at least 8 or more characters`
              }
            })}
          />
          <br />
          <span className="error-block">{errors.password?.message}</span>
          <br />
        </form>
        <br />
        <div className="btn">
          <button type="submit" id="btn" onClick={handleClick}>
            Button
          </button>
        </div>
      </div>
      <div className="image">
        <img src={img1} alt="img1" className="img1" />
      </div>
    </LoginContainer>
  );
};

export default Login;
