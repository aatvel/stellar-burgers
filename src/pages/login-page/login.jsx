import React from "react";
import { Link } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";

const Login = ({
  email,
  password,
  handleChangePassword,
  handleChangeEmail,
  handleClick,
}) => {
  return (
    <>
      <div className="login-wrapper">


        <div className="sign-in">
          <div className="sign-in-header">Вход</div>

          <form className="inputs-wrapper" onSubmit={handleClick}>
            <input
              className="input input-login"
              placeholder="E-mail"
              value={email}
              onChange={handleChangeEmail}
            />

            <input
              className="input input-login"
              placeholder="Пароль"
              value={password}
              onChange={handleChangePassword}
            />

            <input className="login-button" type="submit" value="Войти" />
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
