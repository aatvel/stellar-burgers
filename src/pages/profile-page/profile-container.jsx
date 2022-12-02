import React from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart, onLogoutStart } from "../../services/login/login-actions";

const ProfileContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const {currentUser} = useSelector((s) => s.loginReducer)
  // console.log(currentUser)

  const goHome = () => navigate("/");

  const {tokenUser} = useSelector(store => store.loginReducer);
  console.log(tokenUser)

  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(onLogoutStart(tokenUser));
    // goHome()
  };

  return (
    <>
      <Profile
      currentUser={currentUser?.user}
      handleClickLogout={handleClickLogout}  />
           
    </>
  );
};

export default ProfileContainer;
