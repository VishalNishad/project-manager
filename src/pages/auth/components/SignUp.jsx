import React from "react";
import styled from "styled-components";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import axios from "axios";
const SignUp = ({ setFormType }) => {
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const signupHandler = async () => {
    try {
      const response = await axios.post(
        "https://mern-task-management.herokuapp.com/user/signup",
        user
      );
            setFormType("login");

    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SignUpFormContainer>
      <h3>Sign Up</h3>
      <span className="text">Full Name</span>
      <div className="formControl">
        <div className="inputContainer">
          <InputField
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                fullName: e.target.value.toLowerCase(),
              }))
            }
          />
        </div>
      </div>
      <span className="text">Email</span>
      <div className="formControl">
        <div className="inputContainer">
          <InputField
            type="email"
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <span className="text">Username</span>
      <div className="formControl">
        <div className="inputContainer">
          <InputField
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <span className="text">Password</span>
      <div className="formControl">
        <div className="inputContainer">
          <InputField
            type="password"
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <Button onClick={signupHandler}>Sign Up</Button>
      <hr />
      Already have an account?{" "}
      <button onClick={() => setFormType("login")} className="btnLink">
        Log In
      </button>
    </SignUpFormContainer>
  );
};

export default SignUp;

const SignUpFormContainer = styled.div`
  box-sizing: border-box;
  width: 20%;
  min-width: 260px;
  margin: 5% auto;
  border: 0.5px solid gainsboro;
  padding: 12px 20px;
  .formControl {
    display: flex;
    align-items: center;
    gap: 0 12px;
    margin-bottom: 10px;
    width: 100%;
    .inputContainer {
      flex: 1;
    }
  }

  .text {
    font-size: 0.95rem;
    font-family: Roboto, "Segoe UI", sans-serif;
  }

  .btnLink {
    background-color: transparent;
    border: none;
    color: dodgerblue;
    font-family: sans-serif;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
