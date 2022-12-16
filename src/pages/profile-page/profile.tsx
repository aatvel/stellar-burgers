import React, {FC} from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordInput,
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { onEditStart } from "../../services/edit-user/edit-actions";

interface IProfile {
  currentUser: any;
  handleClickLogout: any; 
}

const Profile: FC<IProfile> = ({ currentUser, handleClickLogout }) => {

  const dispatch = useDispatch();

  const [name, setName] = useState<string>(currentUser?.name || "");
  const [email, setEmail] = useState<string>(currentUser?.email || "");
  const [password, setPassword] = useState<string>("******");

  const user = {
    email,
    password,
    name,
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setPassword(e.target.value);
  };

  const handleSave = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(user);
    e.preventDefault();
    dispatch(onEditStart(user));
  };

  const handleReset = () => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  };

  return (
    currentUser && (
      <>
        <div className="login-wrapper">
          <div className="profile-container">
            <div className="info-container">
              <NavLink to="/profile" className="info-type">
                Профиль
              </NavLink>

              <NavLink to="/profile/orders" className="info-type">
                История заказов
              </NavLink>

              <NavLink to="/" className="info-type" onClick={handleClickLogout}>
                Выход
              </NavLink>
            </div>

            <div className="sign-in" style={{ margin: "0" }}>
              <form
                className="inputs-wrapper"
                style={{ marginTop: "120px", marginLeft: "60px" }}
                onSubmit={handleSave}
              >
                <div style={{ width: "100%", position: "relative" }}>
                  <Input
                    onChange={handleChangeName}
                    value={name}
                    name={"name"}
                    placeholder="Логин"
                
                    extraClass="mb-2"
                  />
                </div>

                <div style={{ width: "100%", position: "relative" }}>
                  <EmailInput
                    onChange={handleChangeEmail}
                    value={email}
                    name={"email"}
                    placeholder="Почта"
                    extraClass="mb-2"
                  />
                </div>

                <div style={{ width: "100%", position: "relative" }}>
                  <PasswordInput
                    onChange={handleChangePassword}
                    value={password}
                    name={"password"}
                    placeholder="Пароль"
                
                    extraClass="mb-2"                 
                  />
                </div>

                <Button
                  style={{
                    marginTop: "20px",
                    marginLeft: "150px",
                    width: "120px",
                  }}
                  htmlType="submit"
                  type="primary"
                  size="small"
                  extraClass="ml-2"
                >
                  Сохранить
                </Button>

                <Button
                  style={{
                    marginLeft: "400px",
                    marginBottom: "0",
                    transform: "translateY(-40px)",
                    width: "120px",
                  }}
                  htmlType="button"
                  type="primary"
                  size="small"
                  extraClass="ml-2"
                  onClick={handleReset}
                >
                  Отмена
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
};



export default Profile;
