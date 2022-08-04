import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './login.css';
import img1 from '../image/image 1.png';
import user from '../image/Useric_user.png';
import lock from '../image/Lockic_lock.png';
//import visible from '../image/Hideic_visible.png';

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
  });
  const handleClick = () => {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let eMail = email.value;
    let pWord = password.value;

    if (eMail == '' || pWord == '') {
      swal({
        title: 'Error',
        text: 'Please fill in the missing field',
        icon: 'warning',
        buttons: { cancel: true },
      });
    } else {
      swal({
        title: `Hi ${eMail}`,
        text: 'your data has been successfully submitted',
        icon: 'success',
        button: 'Ok',
      });
    }
  };

  return (
    <div className="container">
      <div className="info" id="info">
        <h1>Log in to Teamwork</h1>
        <p>Forgot password?</p>

        <form
          className="validateForm"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <br />
          <label for="email">Email</label>
          <br />
          <img src={user} alt="user" className="user" />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Looks like this is not an email',
              },
            })}
          />
          <br />
          <span className="error-block">{errors.email?.message}</span>
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
            {...register('password', {
              required: 'Password cannot be empty',
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                message: `Must contain at least at least 8 or more characters`,
              },
            })}
          />

          <br />
          <span className="error-block">{errors.password?.message}</span>
          <br />
        </form>
        {/* <div className="remember">
          <input
            type="checkbox"
            name="remember"
            id="agree"
            valclass="remember"
          />
          <label for="remember">Remember</label>
          <p>Forgotten password?</p>
        </div> */}
        <div className="btn">
          <button type="submit" id="btn" onClick={handleClick}>
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
