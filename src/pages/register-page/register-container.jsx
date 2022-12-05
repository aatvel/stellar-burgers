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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

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
    setTimeout(() => directoFromLogin(), 1000);
  };

  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

 

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
