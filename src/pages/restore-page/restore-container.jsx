import React, { useState, useEffect } from "react";
import Restore from "./restore";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { passwordRestore } from "../../services/restore-password";
import { onRestoreStart } from "../../services/restore-password/restore-actions";
import { getCurrentUserStart } from "../../services/login/login-actions";

const RestoreContainer = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const goResetPassword = () => navigate("/reset-password");

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(onRestoreStart({ email: value }));
    goResetPassword();
  };

  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const { currentUser } = useSelector((s) => s.loginReducer);
  useEffect(() => {
    if (currentUser) {
      return directoFromLogin();
    }
  });

  return (
    <>
      <Restore
        value={value}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </>
  );
};

export default RestoreContainer;
