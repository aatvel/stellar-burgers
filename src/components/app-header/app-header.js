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
import { NavLink } from "react-router-dom";

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
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu_left}>
          <NavLink className={styles.menu_item}>
            <BurgerIcon  />
            <p className="text text_type_main-default">Конструктор</p>
          </NavLink>

          <NavLink className={styles.menu_item}>
          <MenuItem
            icon={<ListIcon  />}
            className="text text_type_main-default text_color_inactive"
            text="Лента заказов"
          />
            </NavLink>
        </ul>

        <section className={styles.logo}>
          <Logo />
        </section>

        <NavLink className={styles.menu_right}>
          <MenuItem
            icon={<ProfileIcon  />}
            text="Личный кабинет"
          />
        </NavLink>
      </nav>
    </header>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
