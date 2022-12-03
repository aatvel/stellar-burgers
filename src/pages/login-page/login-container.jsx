import React, { useState, useEffect } from "react";
import Login from "./login";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserStart,
  onLogintart,
} from "../../services/login/login-actions";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const { currentUser } = useSelector((s) => s.loginReducer);


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
    directoFromLogin();
  };

  useEffect(() => {
    if (currentUser) {
      return directoFromLogin();
    }
  });

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
