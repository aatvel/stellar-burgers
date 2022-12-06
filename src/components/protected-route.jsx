import React from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";
import { getCookie } from "../utils/cookie";

export function ProtectedRoute({ children }) {
  const location = useLocation();

  const auth = localStorage.getItem("refreshToken")

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
