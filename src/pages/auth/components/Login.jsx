import React from "react";
import styled from "styled-components";
import InputField from "../../../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import axios from "axios";

const Login = ({ setFormType }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const loginHandler = async () => {
    try {
      const response = await axios.post(
        "https://mern-task-management.herokuapp.com/user/login",
        user
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginFormContainer>
      <h3>Log In</h3>
      <span className="">Username</span>
      <div className="formControl">
        <div className=""></div>
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
      <span className="">Password</span>
      <div className="formControl">
        <div className=""></div>
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
      <Link to="/">Forgot Password?</Link>
      <Button onClick={loginHandler}>Log In</Button>
      <hr />
      Don't have an account?{" "}
      <button onClick={() => setFormType("signup")} className="btnLink">
        Sign Up
      </button>
    </LoginFormContainer>
  );
};

export default Login;

const LoginFormContainer = styled.div`
  box-sizing: border-box;
  width: 20%;
  min-width: 260px;
  margin: 5% auto;
  border: 0.5px solid gainsboro;
  padding: 12px;
  .formControl {
    display: flex;
    align-items: center;
    gap: 0 12px;
    margin: 5px 0;
    width: 100%;
    .inputContainer {
      flex: 1;
    }
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
