import React, { useState, useEffect } from "react";
import Restore from "./restore";
import { useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { passwordRestore } from "../../services/restore-password";
import { onRestoreStart } from "../../services/restore-password/restore-actions";

const RestoreContainer = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const goResetPassword = () => navigate("/reset-password");

  const handleClick = (e) => {
    e.preventDefault();
     dispatch(onRestoreStart({ email: value }));
     goResetPassword()
  };

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
