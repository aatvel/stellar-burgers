import styles from "./profile.module.css";
import {
  NavLink,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { LOGOUT_USER_REQUEST } from "../../services/login/login-actions";

const ProfileNav = () => {
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

  return (
    <div className={styles.profile}>
      <NavLink to="/profile" className={` info-type ${location.pathname === "/profile" ? "text_color_primary": "text_color_inactive"}`}>
        Профиль
      </NavLink>

      <NavLink to="/profile/orders" className={`info-type ${location.pathname === "/profile/orders" ? "text_color_primary": "text_color_inactive"}`}>
        История заказов
      </NavLink>

      <NavLink to="/" className="info-type" onClick={handleClickLogout}>
        Выход
      </NavLink>
    </div>
  );
};
export default ProfileNav;
