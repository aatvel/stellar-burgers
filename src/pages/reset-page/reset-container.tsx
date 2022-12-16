import React, { useEffect } from "react";
import Reset from "./reset";
import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onResetStart } from "../../services/reset-password/reset-actions";


const ResetContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const goToProfilePage = () => navigate("/profile");

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(onResetStart({ password: value, token: code }));
    setTimeout(() => goToProfilePage(), 1000);
  };


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
