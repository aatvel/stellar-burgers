import React, {  FC, useState } from "react";
import PropTypes from "prop-types";
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onRestoreStart } from "../../services/restore-password/restore-actions";


const Restore: FC = ({ }) => {
   const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const goResetPassword = () => navigate("/reset-password", {state: 123});



  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(onRestoreStart({ email: value }));
    setTimeout(() => goResetPassword(), 1000);
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="sign-in">
          <div className="sign-in-header">Восстановление пароля</div>
          <form className="inputs-wrapper" onSubmit={handleClick}>
            <EmailInput
              placeholder="E-mail"
              extraClass="mb-2"
              value={value}
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


export default Restore;
