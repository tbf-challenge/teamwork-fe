import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { signIn } from "../../apis/requests";
import SmallButton from "../../components/buttons/SmallButton";
import Styled from "./LoginStyle";
import { ReactComponent as MailSvg } from "../../Assets/images/email.svg";
import { ReactComponent as LockOutlineSvg } from "../../Assets/images/lock_outline.svg";
import { ReactComponent as EyeOpenSvg } from "../../Assets/images/remove_red_eye.svg";

const {
  Container,
  Row,
  ColBackground,
  ColForm,
  Heading,
  FormWrapper,
  Form,
  FormGroup,
  FormLabel,
  FormInputGroup,
  FormInput,
  FormError,
  Typography
} = Styled;

const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility((prev) => !prev);
  const [, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "all"
  });

  const onSubmit = async (values) => {
    let message;
    setIsLoading(true);

    try {
      const res = await signIn(values);
      console.log(res);
      message = "you loggged in successfully";
      swal({
        title: "Success",
        text: message,
        icon: "success"
      });
      navigate("/");
    } catch (err) {
      console.error({ err });
      message = "there was an error";
      swal({
        title: "Error",
        text: message,
        icon: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <Row>
        {/* background image section */}
        <ColBackground />

        {/* form section */}
        <ColForm>
          <Heading>
            Team Up,
            <br />
            Break the ice
          </Heading>

          <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInputGroup>
                  <MailSvg />
                  <FormInput
                    type="text"
                    placeholder="ayooluwakunle@gmil.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Looks like this is not an email"
                      }
                    })}
                  />
                </FormInputGroup>
                {errors?.email && <FormError>{errors.email.message}</FormError>}
              </FormGroup>

              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormInputGroup>
                  <LockOutlineSvg />
                  <FormInput
                    type={isVisible ? "text" : "password"}
                    defaultValue="ayokunle23"
                    {...register("password", {
                      required: "Password cannot be empty",
                      pattern: {
                        value:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,16}$/,
                        message: `Must contain at least 8 or more characters, including an uppercase, numerical and special char`
                      }
                    })}
                  />
                  <EyeOpenSvg onClick={toggleVisibility} />
                </FormInputGroup>
                {errors?.password && <FormError>{errors.password.message}</FormError>}
                <Typography.Link to="/dashboard">Forgot Password?</Typography.Link>
              </FormGroup>

              <SmallButton submit Text="Login" bgColor="#1678F3" color="#FFFFFF" width="100%" style={{ marginTop: 20 }} />
            </Form>

          </FormWrapper>
        </ColForm>
      </Row>
    </Container>
  );
};

export default Login;
