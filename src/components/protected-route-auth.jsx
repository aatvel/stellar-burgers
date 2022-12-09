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
  const auth = getCookie('accessToken')

  // const isLoggedIn = useSelector((store) => store.loginReducer.isLoggedIn);
  // console.log( isLoggedIn);


  const from = location.state?.from || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (auth) {
    // ...то отправляем его на предыдущую страницу
    return <Navigate to={ from } />;
  }

  return children;
}
