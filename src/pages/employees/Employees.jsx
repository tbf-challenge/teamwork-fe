import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactLoading from "react-loading";
// import swal from "sweetalert";
import { CreateEmployee } from "./employees.style";

const {
  Wrapper, Container, FormGroup, FormButton, Loader
} = CreateEmployee;

const Employees = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "all"
  });

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
    reset();
  };

  return (
    <Wrapper>
      <h1>Invite Employee</h1>

      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>

          <FormGroup>
            <label htmlFor="email">Enter Employee Email</label>
            <input
              type="text"
              id="email"
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

            {errors?.email && <span className="error">{errors.email.message}</span>}
          </FormGroup>

          <FormButton>
            <button type="submit" title="invite">
              Send Invitation
            </button>
          </FormButton>
        </form>

        {isLoading && (
          <Loader>
            <div className="mask" />
            <ReactLoading type="spin" color="black" className="spinner" />
          </Loader>
        )}
      </Container>
    </Wrapper>
  );
};

export default Employees;
