import React, { useState, useEffect } from "react";
import Restore from "./restore";
import { useNavigate } from "react-router-dom";
import { passwordRestore } from "../../services/restore-password";
import { onRestoreStart } from "../../services/restore-password/restore-actions";

const RestoreContainer = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const goResetPassword = () => navigate("/reset-password");

  const handleClick = (e) => {
    e.preventDefault();
    const data = passwordRestore({ email: value });
    data.then((data) => {
      console.log(data);
      if (data.success) {
        goResetPassword();
      }
      return data.success;
    });
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
