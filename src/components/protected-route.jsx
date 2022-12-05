import React from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";

export function ProtectedRoute({ children }) {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);
  const { currentUser } = useSelector((s) => s.loginReducer);


  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
