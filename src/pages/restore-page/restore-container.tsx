import React, { useState, useEffect } from "react";
import Restore from "./restore";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { onRestoreStart } from "../../services/restore-password/restore-actions";


const RestoreContainer = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const goResetPassword = () => navigate("/reset-password", {state: 123});



  const handleClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(onRestoreStart({ email: value }));
    setTimeout(() => goResetPassword(), 1000);
  };

  return (
    <Restore
      value={value}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
};

export default RestoreContainer;
