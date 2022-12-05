import React from "react";
import AppHeader from "../../components/app-header/app-header";

const Reset = ({value,
  code,
  handleChangePassword,
  handleChangeCode,
  handleClick}) => {
  return (
    <>
      <div className="login-wrapper">

        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper" onSubmit={handleClick}>
            <input
              className="input input-login"
              placeholder="Введите новый пароль"
              type='password'
              required
              value={value}
              onChange={handleChangePassword}
            />
            <input
              className="input input-login"
              placeholder="Введите код из письма"
              type='token'
              required
              value={code}
              onChange={handleChangeCode}
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
