import React from "react";
import { NavLink } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";
import {
  PasswordInput,
  EmailInput,
  Input,
  EditIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
const Profile = ({ currentUser, handleClickLogout, onChange, onIconClick }) => {
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
              >
                <div style={{ width: "100%", position: "relative" }}>
                  <EmailInput
                    onChange={onChange}
                    value={currentUser.name}
                    name={"name"}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                  />
                </div>
                <div style={{ width: "100%", position: "relative" }}>
                  <EmailInput
                    onChange={onChange}
                    value={currentUser.email}
                    name={"email"}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                  />
                </div>
                <div style={{ width: "100%", position: "relative" }}>
                  <PasswordInput
                    onChange={onChange}
                    value={"****"}
                    name={"password"}
                    icon="EditIcon"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
