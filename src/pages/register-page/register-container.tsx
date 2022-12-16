import React from "react";
import Register from "./register";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { onRegisterStart } from "../../services/register/register-actions";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { getCurrentUserStart } from "../../services/login/login-actions";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

  const user = {
    email,
    password,
    name,
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(onRegisterStart(user));
    setTimeout(() => directoFromLogin(), 1000);
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
