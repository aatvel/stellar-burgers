import React, {FC} from "react";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserStart } from "../services/login/login-actions";
import { PreLoader } from "./app/preloader";
import { getCookie, setCookie } from "../utils/cookie";

interface IRoute {
  children: JSX.Element;
}

const ProtectedRouteOrder: FC<IRoute> = ({children}) => {
  const location = useLocation();
  const auth = getCookie("isLoggedIn");


  // const auth = getCookie("accessToken");
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;}

  return children;
}

export default ProtectedRouteOrder;