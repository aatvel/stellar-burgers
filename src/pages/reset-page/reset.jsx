import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
