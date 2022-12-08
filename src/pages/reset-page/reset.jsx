import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

const Reset = ({
  value,
  code,
  handleChangePassword,
  handleChangeCode,
  handleClick,
}) => {
  return (
    <>
      <div className="login-wrapper">
        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper" onSubmit={handleClick}>
            <PasswordInput
              placeholder="Пароль"
              onChange={handleChangePassword}
              extraClass="mb-2"
              minLength="5"
            />
            <Input
              extraClass="mb-2"
              placeholder="Код из письма"
              required
              value={code}
              onChange={handleChangeCode}
            />
            <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass="ml-2"
              >
                Восстановить
              </Button>
          </form>
          <div className="register-forget">
            <p className="first-header">Вспомнили пароль?</p>
            <Link to="/login" className="second-header">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Reset.propTypes = {
  code: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeCode: PropTypes.func.isRequired,
};

export default Reset;
