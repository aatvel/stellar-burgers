import React from "react";
import {
  Button,
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

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
          <li className={styles.menu_item}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </li>

          <MenuItem
            icon={<ListIcon type="secondary" />}
            className="text text_type_main-default text_color_inactive"
            text="Лента заказов"
          />
        </ul>

        <section className={styles.logo}>
          <Logo />
        </section>

        <ul className={styles.menu_right}>
          <MenuItem
            icon={<ProfileIcon type="secondary" />}
            text="Личный кабинет"
          />
        </ul>
      </nav>
    </header>
  );
}

