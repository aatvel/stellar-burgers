import React, {FC, ReactNode} from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";
import { getCookie, setCookie } from "../utils/cookie";

interface IProtectedRoute{
  children: JSX.Element;
  anonymous?: boolean;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children, anonymous = true }) => {
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

export default ProtectedRoute;