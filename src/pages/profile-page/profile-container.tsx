import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "./profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserStart,
  onLogoutStart,
} from "../../services/login/login-actions";
import { PreLoader } from "../../components/app/preloader";
import { useAppSelector } from "../../utils/types";


const ProfileContainer = () => {

  const dispatch = useDispatch();
  const { currentUser, loading } = useAppSelector((s) => s.loginReducer);

  useEffect(() => {
    dispatch(getCurrentUserStart());

  }, []);

   

  return loading ? (
    <PreLoader />
  ) : (
    <>
      <Profile
        currentUser={currentUser}
      />
    </>
  );
};

export default ProfileContainer;
