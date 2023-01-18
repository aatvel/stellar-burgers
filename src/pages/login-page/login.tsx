import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  onLogintart,
} from "../../services/login/login-actions";
import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Login: FC = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const user = {
    email,
    password,
  };

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(onLogintart(user));
    setTimeout(() => directoFromLogin(), 1000);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="sign-in">
          <div className="sign-in-header">Вход</div>

          <form className="inputs-wrapper" onSubmit={handleClick}>
            <EmailInput
              extraClass="mb-2"
              placeholder="E-mail"
              value={email}
              onChange={handleChangeEmail}
              minLength={5}
            />

            <Input
              extraClass="mb-2"
              placeholder="Пароль"
              value={password}
              onChange={handleChangePassword}
              minLength={5}
            />

            <Button
              htmlType="submit"
              type="primary"
              size="large"
              extraClass="ml-2"
            >
              Войти
            </Button>
          </form>

          <div className="register-forget">
            <p className="first-header">Вы - новый пользователь?</p>

            <Link to="/register" className="second-header">
              Зарегистрироваться
            </Link>
          </div>

          <div className="register-forget">
            <p className="first-header">Забыли пароль?</p>

            <Link to="/restore-password" className="second-header">
              Восстановить пароль
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
