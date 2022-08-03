import React, { useState } from 'react';
import './login.css';
import img1 from '../image/image 1.png';
import user from '../image/Useric_user.png';
import lock from '../image/Lockic_lock.png';
//import visible from '../image/Hideic_visible.png';

function Login() {
  const [emailval, setemailval] = useState('');
  const [password, setpassword] = useState('');

  const handlesubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="info" id="info">
        <h1>Log in to Teamwork</h1>
        <p>Forgot password?</p>

        <form className="validateForm" onSubmit={handlesubmit}>
          <br />
          <label for="email">Email</label>
          <br />

          <img src={user} alt="user" className="user" />
          <input
            value={emailval}
            onChange={(e) => {
              setemailval(e.target.value);
            }}
            type="text"
            name="email"
            placeholder="Insert Email"
          />
          <br />
          <span className="error-block"></span>
          <br />
          <label for="username">Password</label>
          <br />

          <img src={lock} alt="lock" className="lock" />
          {/* <img src={visible} alt="visible" className="visible" /> */}
          <input
            type="password"
            name="password"
            placeholder=" insert Password"
            className="password"
            id="password"
          />

          <br />
          <span className="error-block"></span>
          <br />
        </form>
        <div className="btn">
          <button type="submit" id="btn">
            Login
          </button>
        </div>
      </div>
      <div className="image">
        <img src={img1} alt="img1" className="img1" />
      </div>
    </div>
  );
}

export default Login;
