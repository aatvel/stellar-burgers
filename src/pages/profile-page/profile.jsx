import React from "react";
import { NavLink } from "react-router-dom";
import AppHeader from "../../components/app-header/app-header";

const Profile = ({currentUser}) => {
  // console.log(currenUser)
  return (
    <>
      <div className="login-wrapper">
        <AppHeader />
        <div className="profile-container">
          <div className="info-container">
            <NavLink to="/profile" className="info-type">
              Профиль
            </NavLink>
            <NavLink to="/profile/orders" className="info-type">
              История заказов
            </NavLink>
            <NavLink to="/profile/orders/:id" className="info-type">
              Выход
            </NavLink>
          </div>
          <div className="sign-in" style={{ margin: "0" }}>
            <form
              className="inputs-wrapper"
              style={{ marginTop: "120px", marginLeft: "60px" }}
            >
              <div style={{ width: "100%", position: "relative" }}>
                <div className="profile-input-placeholder">Имя</div>
                <div
                  className="input input-login"
                  style={{ padding: "40px 0px 24px 24px" }}
                >
                  {currentUser?.name}
                </div>
              </div>
              <div style={{ width: "100%", position: "relative" }}>
                <div className="profile-input-placeholder">Логин</div>
                <div
                  className="input input-login"
                  style={{ padding: "40px 0px 24px 24px" }}
                >
                  {currentUser?.email}
                </div>
              </div>
              <div style={{ width: "100%", position: "relative" }}>
                <div className="profile-input-placeholder">Пароль</div>
                <div
                  className="input input-login"
                  style={{ padding: "40px 0px 24px 24px" }}
                >******</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
