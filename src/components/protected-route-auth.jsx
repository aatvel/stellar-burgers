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
  const auth = getCookie("accessToken")

  const fromPage = location.state?.from?.pathname || "/";
  const directoFromLogin = () => navigate(fromPage, { replace: true });

  if (auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  
  return children;
}
