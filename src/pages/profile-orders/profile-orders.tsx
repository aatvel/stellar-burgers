import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { Link, NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getCurrentUserStart,
  LOGOUT_USER_REQUEST,
} from "../../services/login/login-actions";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { PreLoader } from "../../components/app/preloader";

const ProfileOrders: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const fromPage = location.state?.from?.pathname || "/";
  const directToPage = () => navigate(fromPage, { replace: true });

  const handleClickLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: LOGOUT_USER_REQUEST });
    directToPage();
  };

  const { currentUser, loading } = useAppSelector((s) => s.loginReducer);
  useEffect(() => {
    // dispatch(getCurrentUserStart());
  }, []);

  return loading ? (
    <PreLoader />
  ) : (
    currentUser && (
      <>
        <div className="login-wrapper">
          <div className="profile-container">
            <div className="info-container">
              <NavLink to="/profile" className="info-type">
                Профиль
              </NavLink>

              <NavLink to={location} className="info-type" type="primary">
                История заказов
              </NavLink>

              <NavLink to="/" className="info-type" onClick={handleClickLogout}>
                Выход
              </NavLink>
            </div>

            <div className="sign-in" style={{ margin: "0" }}>
              <div style={{ width: "100%", position: "relative" }}>
                
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProfileOrders;
