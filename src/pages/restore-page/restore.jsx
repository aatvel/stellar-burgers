import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Restore = ({ handleChange, value, handleClick }) => {
  return (
    <>
      <div className="login-wrapper">
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
              text={"Отправить"}
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

Restore.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Restore;
