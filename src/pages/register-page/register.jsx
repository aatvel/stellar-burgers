import React from "react";
import { Link } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";

const Register = ({}) => {
  return (
    <>
      <div className="login-wrapper">
        <AppHeader />
        <div className="sign-in">
          <>
            <div className="sign-in-header">Регистрация</div>
            <form className="inputs-wrapper">
              <input className="input input-login" placeholder="Имя" />
              <input className="input input-login" placeholder="E-mail" />
              <input className="input input-login" placeholder="Пароль" />
              <input
                className="login-button"
                type="submit"
                style={{ maxWidth: "256px" }}
              />
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
