import React, {FC} from "react";
import styles from './profile.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordInput,
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, useLocation } from "react-router-dom";
import { onEditStart } from "../../services/edit-user/edit-actions";
import {
  LOGOUT_USER_REQUEST
} from "../../services/login/login-actions";
import ProfileNav from "../profile-nav/profile-nav";

interface IProfile {
  currentUser: {name: string, email: string};
}

const Profile: FC<IProfile> = ({ currentUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
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

  const handleSave = (e: React.FormEvent ) => {
    console.log(user);
    e.preventDefault();
    dispatch(onEditStart(user));
  };

  const handleReset = () => {
    setName(currentUser?.name);
    setEmail(currentUser?.email);
  };

  const fromPage = location.state?.from?.pathname || "/";
  const directToPage = () => navigate(fromPage, { replace: true });

  const handleClickLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({type: LOGOUT_USER_REQUEST});
    directToPage();
  };

  return (
    currentUser && (
      <>
        <div className="login-wrapper">
          <div className={styles.container}>


            <ProfileNav />

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
