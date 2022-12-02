import React from "react";
import Register from "./register";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { onRegisterStart } from "../../services/register/register-actions";
import { Navigate, useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goHome = () => navigate("/");

  const user = {
    email,
    password,
    name,
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(onRegisterStart(user));

    // goHome()
  };

  return (
    <>
      <Register
        name={name}
        email={email}
        password={password}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleClick={handleClick}
      />
    </>
  );
};

export default RegisterContainer;
