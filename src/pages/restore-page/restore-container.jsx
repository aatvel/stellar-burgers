import React, { useState, useEffect } from "react";
import Restore from "./restore";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { onRestoreStart } from "../../services/restore-password/restore-actions";


const RestoreContainer = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const goResetPassword = () => navigate("/reset-password", {state: 123});

  // useEffect(() => {
  //   dispatch(getCurrentUserStart());
  // }, []);

  const handleClick = (e) => {
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
