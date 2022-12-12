import React from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";
import { getCookie, setCookie } from "../utils/cookie";

export function ProtectedRoute({ children, anonymous = true }) {
  const location = useLocation();
  const auth = getCookie("isLoggedIn");
  const from = location.state?.from || '/';

  // const auth = getCookie("accessToken");

  if (anonymous && auth) {
    // ...то отправляем его на предыдущую страницу
    return <Navigate to={ from } />;
  }

  if (!anonymous && !auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
