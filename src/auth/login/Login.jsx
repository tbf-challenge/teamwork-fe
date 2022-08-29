import { useState } from "react";
import SmallButton from "../../components/buttons/SmallButton";
// import { useForm } from "react-hook-form";
// import swal from "sweetalert";
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
  Typography
} = Styled;

const Login = () => {
  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility((prev) => !prev);
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit
  // } = useForm({
  //   mode: "all"
  // });

  // const handleClick = () => {
  //   const email = document.querySelector("#email");
  //   const password = document.querySelector("#password");
  //   const eMail = email.value;
  //   const pWord = password.value;
  //   if (eMail === "" || pWord === "") {
  //     swal({
  //       title: "Error",
  //       text: "Please fill in the missing field",
  //       icon: "warning",
  //       buttons: { cancel: true }
  //     });
  //   } else {
  //     swal({
  //       title: `Data submitted`,
  //       text: "your data has been successfully submitted",
  //       icon: "success",
  //       button: "Ok"
  //     });
  //   }
  // };

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
            <Form>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInputGroup>
                  <MailSvg />
                  <FormInput type="text" placeholder="ayooluwakunle@gmil.com" />
                </FormInputGroup>
              </FormGroup>

              <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormInputGroup>
                  <LockOutlineSvg />
                  <FormInput type={isVisible ? "text" : "password"} defaultValue="ayokunle23" />
                  <EyeOpenSvg onClick={toggleVisibility} />
                </FormInputGroup>
                <Typography.Link to="/">Forgot Password?</Typography.Link>
              </FormGroup>

              <SmallButton Text="Login" bgColor="#1678F3" color="#FFFFFF" width="100%" style={{ marginTop: 20 }} />
            </Form>
          </FormWrapper>
        </ColForm>
      </Row>
    </Container>
  );
};

export default Login;
