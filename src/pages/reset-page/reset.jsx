import React from "react";
import AppHeader from "../../components/app-header/app-header";

const Reset = ({}) => {
  return (
    <>
      <div className="login-wrapper">
        <AppHeader />
        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper">
            <input
              className="input input-login"
              placeholder="Введите новый пароль"
            />
            <input
              className="input input-login"
              placeholder="Введите код из письма"
            />
            <input
              className="login-button"
              type="submit"
              style={{ maxWidth: "167px" }}
            />
          </form>
          <div className="register-forget">
            <p className="first-header">Вспомнили пароль?</p>
            <p className="second-header">Войти</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
