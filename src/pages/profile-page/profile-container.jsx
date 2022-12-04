import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "./profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserStart,
  onLogoutStart,
} from "../../services/login/login-actions";


const ProfileContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const { currentUser } = useSelector((s) => s.loginReducer);



  const fromPage = location.state?.from?.pathname || "/";
  const directToPage = () => navigate(fromPage, { replace: true });

  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(onLogoutStart());
    directToPage();
  };



  return (
    <>
      <Profile
        currentUser={currentUser}
        handleClickLogout={handleClickLogout}

      />
    </>
  );
};

export default ProfileContainer;
