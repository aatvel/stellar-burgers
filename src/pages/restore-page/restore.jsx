import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";

const Restore = ({ handleChange, value, handleClick }) => {
  return (
    <>
      <div className="login-wrapper">
        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper" onSubmit={handleClick}>
            <EmailInput
              placeholder="E-mail"
              extraClass="mb-2"
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
