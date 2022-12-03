import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "./profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart, onLogoutStart } from "../../services/login/login-actions";

const ProfileContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const {currentUser} = useSelector((s) => s.loginReducer)

  const goHome = () => navigate("/");

  const fromPage = location.state?.from?.pathname || '/'
  const directoFromLogin = () =>  navigate(fromPage, {replace: true})


  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(onLogoutStart());
    directoFromLogin()
  };

  return (
    <>
      <Profile
      currentUser={currentUser}
      handleClickLogout={handleClickLogout}  />
           
    </>
  );
};

export default ProfileContainer;
