import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";

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
           <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass="ml-2"
              >
                Далее
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

Restore.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func.isRequired,
};

export default Restore;
