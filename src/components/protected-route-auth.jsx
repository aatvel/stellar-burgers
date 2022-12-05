import React from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";

export function ProtectedRouteAuth({ children }) {
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const { currentUser } = useSelector((s) => s.loginReducer);

    

  if (currentUser) {
    return <Navigate to="/" state={{ from: fromPage }} />;
  }
  return children;
}
