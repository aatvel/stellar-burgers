import React, { useEffect } from "react";
import Reset from "./reset";
import { useState } from "react";

import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onResetStart } from "../../services/reset-password/reset-actions";
import { getCurrentUserStart } from "../../services/login/login-actions";

const ResetContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");

  const goToProfilePage = () => navigate("/profile");

  const handleChangePassword = (e) => {
    setValue(e.target.value);
  };
  const handleChangeCode = (e) => {
    setCode(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(onResetStart({ password: value, token: code }));
    setTimeout(() => goToProfilePage(), 1000);
  };

  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });


  const { state } = useLocation();
  {
    if (state !== 123 ) {
      return <Navigate to="/" />;
    }
  }

  return (
    <>
      <Reset
        value={value}
        code={code}
        handleChangePassword={handleChangePassword}
        handleChangeCode={handleChangeCode}
        handleClick={handleClick}
      />
    </>
  );
};

export default ResetContainer;
