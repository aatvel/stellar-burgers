import React from "react";
import { useEffect } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";
import { getCookie } from "../utils/cookie";

export function ProtectedRouteAuth({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = localStorage.getItem("refreshToken");

  // const isLoggedIn = useSelector((store) => store.loginReducer.isLoggedIn);
  // console.log( isLoggedIn);

  const fromPage = location.state?.from?.pathname || "/";


  if (auth) {
    return <Navigate to={ fromPage } />;
  }

  // if ( !auth) {
  //   return <Navigate to="/login" state={{ from: location}}/>;
  // }

  return children;
}
