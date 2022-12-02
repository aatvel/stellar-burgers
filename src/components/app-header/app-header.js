import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink, useLocation } from "react-router-dom";

class MenuItem extends React.Component {
  render() {
    return (
      <li className={styles.menu_item}>
        {this.props.icon}
        <p className="text text_type_main-default text_color_inactive">
          {this.props.text}
        </p>
      </li>
    );
  }
}

export default function AppHeader() {
  const location = useLocation();
  const setProfileActive = (url) => {
    if (location.pathname === "/profile" && url === "/profile") {
      return true;
    } else {
      return false;
    }
  };

  const setCounstructorActive = (url) => {
    if (location.pathname === "/" && url === "/") {
      return true;
    } else {
      return false;
    }
  };

  const setOrderActive = (url) => {
    if (location.pathname === "/login" && url === "/login") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu_left}>
          <NavLink className={styles.menu_item} to={{ pathname: "/" }}>
            <BurgerIcon
              type={
                setCounstructorActive(location.pathname)
                  ? "primary"
                  : "secondary"
              }
            />
            <p className="text text_type_main-default">Конструктор</p>
          </NavLink>

          <NavLink className={styles.menu_item} to={{ pathname: "/login" }}>
          <ListIcon
            type={setOrderActive(location.pathname) ? "primary" : "secondary"}
          />
          <p className="text text_type_main-default">Лента заказов</p>
        </NavLink>

        </ul>

        <section className={styles.logo}>
          <Logo />
        </section>

        <NavLink className={styles.menu_right} to={{ pathname: "/profile" }}>
          <ProfileIcon
            type={setProfileActive(location.pathname) ? "primary" : "secondary"}
          />
          <p className="text text_type_main-default mr-4">Личный кабинет</p>
        </NavLink>
      </nav>
    </header>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
