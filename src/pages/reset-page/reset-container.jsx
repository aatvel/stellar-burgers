import React from "react";
import Reset from "./reset";
import { useState } from "react";
import { passwordReset } from "../../services/reset-password";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { onResetStart } from "../../services/reset-password/reset-actions";

const ResetContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
    goToProfilePage()
  };

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
