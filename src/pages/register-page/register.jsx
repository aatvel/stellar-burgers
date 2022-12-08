import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Register = ({
  name,
  email,
  password,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  handleClick,
}) => {
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
                minLength="5"
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
Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
};

export default Register;
