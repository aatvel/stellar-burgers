import React, { FC, useEffect } from "react";
import styles from "./profile-orders.module.css";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { Link, NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getCurrentUserStart,
  LOGOUT_USER_REQUEST,
} from "../../services/login/login-actions";
import { PreLoader } from "../../components/app/preloader";
import Order from "./profile-order/order";
import { getAccessToken } from "../../utils/cookie";
import { wsUrl } from "../../utils/consts";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/ws/ws-actions";
import ProfileNav from "../profile-nav/profile-nav";

const ProfileOrders: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { message } = useAppSelector((state) => state.wsReducer);

  const fromPage = location.state?.from?.pathname || "/";
  const directToPage = () => navigate(fromPage, { replace: true });

  const handleClickLogout = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({ type: LOGOUT_USER_REQUEST });
    directToPage();
  };

  const { currentUser, loading } = useAppSelector((s) => s.loginReducer);
  useEffect(() => {
    dispatch(getCurrentUserStart());
  }, []);

  const orders = message?.orders;
  const tokenn = getAccessToken();
  useEffect(() => {
    if (!orders) {
      dispatch(wsConnectionStart(`${wsUrl}/orders?token=${tokenn}`));
    }
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  return loading ? (
    <PreLoader />
  ) : (
    currentUser && (
      <>
        <div className={styles.container}>
          <ProfileNav />

          <div className={styles.order}>
            {message?.orders ? (
              <div className={styles.scroll}>
                {message.orders
                  .slice(0)
                  .reverse()
                  .map((order) => (
                    <Order key={order._id} order={order} />
                  ))}
              </div>
            ) : null}
          </div>
        </div>
      </>
    )
  );
};

export default ProfileOrders;
