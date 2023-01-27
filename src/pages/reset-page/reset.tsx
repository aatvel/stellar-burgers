import React, {  FC } from "react";
import { Link } from "react-router-dom";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/types";
import { onResetStart } from "../../services/reset-password/reset-actions";

const Reset: FC = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const goToProfilePage = () => navigate("/profile");

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleClick = (e: React.FormEvent) => {
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
      <div className="login-wrapper">
        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper" onSubmit={handleClick}>
            <PasswordInput
              placeholder="Пароль"
              onChange={handleChangePassword}
              extraClass="mb-2"
              minLength={5}
              value={value}
            />
            <Input
              extraClass="mb-2"
              placeholder="Код из письма"
              required
              value={code}
              onChange={handleChangeCode}
            />
            <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass="ml-2"
              >
                Восстановить
              </Button>
          </form>
          <div className="register-forget">
            <p className="first-header">Вспомнили пароль?</p>
            <Link to="/login" className="second-header">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default Reset;
