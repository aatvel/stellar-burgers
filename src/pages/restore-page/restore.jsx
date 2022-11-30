import React from "react";
import AppHeader from "../../components/app-header/app-header";

const Restore = ({handleChange, value, handleClick }) => {
  
  return (
    <>
      <div className="login-wrapper">
        <AppHeader />
        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper" onSubmit={handleClick}>
            <input
              className="input input-login"
              placeholder="Укажите e-mail"
              type="email"
              required
              value={value}
              onChange={handleChange}
            />
            <input
              className="login-button"
              type="submit"
              style={{ maxWidth: "256px" }}
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

export default Restore;
