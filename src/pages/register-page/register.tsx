import React, {FC} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch } from "../../utils/types";
import { useState, useEffect } from "react";
import { onRegisterStart } from "../../services/register/register-actions";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { getCurrentUserStart } from "../../services/login/login-actions";


const Register: FC = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

  const user = {
    email,
    password,
    name,
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(onRegisterStart(user));
    setTimeout(() => directoFromLogin(), 1000);
  };
 
  return (
    <>
      <div className="login-wrapper">
        <div className="sign-in">
          <>
            <div className="sign-in-header">Регистрация</div>
            <form className="inputs-wrapper" onSubmit={handleClick}>
              <Input
                placeholder="Имя"
                value={name}
                onChange={handleChangeName}
                extraClass="mb-2"
              />
              <EmailInput
                placeholder="E-mail"
                value={email}
                onChange={handleChangeEmail}
                extraClass="mb-2"
              />

              <PasswordInput
                placeholder="Пароль"
                value={password}
                onChange={handleChangePassword}
                extraClass="mb-2"
                minLength={5}
              />

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass="ml-2"
              >
                Зарегистрироваться
              </Button>
            </form>
          </>

          <div className="register-forget">
            <p className="first-header">Уже зарегистрированы?</p>
            <Link to="/login" className="second-header">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default Register;
