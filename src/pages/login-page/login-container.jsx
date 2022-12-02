import React, { useState } from "react";
import Login from "./login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogintart } from "../../services/login/login-actions";


const LoginContainer = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goHome = () => navigate("/");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const user = {
    email,
    password,
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(onLogintart(user));
    // goHome()
  };

  return (
    <>
      <Login
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleClick={handleClick}
      />
    </>
  );
};

export default LoginContainer;
