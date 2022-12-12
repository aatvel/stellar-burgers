import React from "react";
import { Link } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";
import PropTypes from "prop-types";
import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

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
            <EmailInput
              extraClass="mb-2"
              placeholder="E-mail"
              value={email}
              onChange={handleChangeEmail}
              minLength="5"
            />

            <Input
              extraClass="mb-2"
              placeholder="Пароль"
              value={password}
              onChange={handleChangePassword}
              minLength="5"
            />

        
            <Button htmlType="submit" type="primary" size="large" extraClass="ml-2">
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

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Login;
