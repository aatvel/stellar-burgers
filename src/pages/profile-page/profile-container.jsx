import React from "react";
import Profile from "./profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../../services/login/login-actions";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const {currentUser} = useSelector((s) => s.loginReducer)
  console.log(currentUser)

  return (
    <>
      <Profile
      currentUser={currentUser?.user} />
    </>
  );
};

export default ProfileContainer;
