import React, { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Auth = () => {
  const [formType, setFormType] = useState("login");

  return (
    <div>
      {formType === "login" ? (
        <Login setFormType={setFormType} />
      ) : (
        <SignUp setFormType={setFormType} />
      )}
    </div>
  );
};

export default Auth;
