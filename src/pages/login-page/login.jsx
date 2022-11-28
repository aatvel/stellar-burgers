import React from "react";
import { Link } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";

const Login = ({}) => {
  return (
    <>
      <div className="login-wrapper">
        <AppHeader />

        <div className="sign-in">
          <div className="sign-in-header">Вход</div>

          <form className="inputs-wrapper">
            <input className="input input-login" placeholder="E-mail" />

            <input className="input input-login" placeholder="Пароль" />

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
