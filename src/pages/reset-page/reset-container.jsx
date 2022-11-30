import React from "react";
import Reset from "./reset";
import { useState } from "react";
import { passwordReset } from "../../services/reset-password";
import { useNavigate } from "react-router-dom";

const ResetContainer = () => {
  const navigate = useNavigate();
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
    const data = passwordReset({ password: value, token: code });
    data.then((data) => {
      console.log(data);
      if (data.succes) {
        console.log("Password successfully reset");
        goToProfilePage()
      }
      return data.success;
    });
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
