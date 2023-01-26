import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "./profile";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../utils/types";
import {
  getCurrentUserStart,
  onLogoutStart,
} from "../../services/login/login-actions";
import { PreLoader } from "../../components/app/preloader";
import { useAppSelector } from "../../utils/types";


const ProfileContainer = () => {

  const dispatch = useAppDispatch();
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
