
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink, useLocation } from "react-router-dom";



export default function AppHeader() {
  const location = useLocation();
  const setProfileActive = (url: string) => {
    if (location.pathname === "/profile" && url === "/profile") {
      return true;
    } else {
      return false;
    }
  };

  const setCounstructorActive = (url: string) => {
    if (location.pathname === "/" && url === "/") {
      return true;
    } else {
      return false;
    }
  };

  const setOrderActive = (url: string) => {
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

          <NavLink className={styles.menu_item} to={{ pathname: "/order" }}>
            <ListIcon
              type={setOrderActive(location.pathname) ? "primary" : "secondary"}
            />
            <p className="text text_type_main-default">Лента заказов</p>
          </NavLink>
        </ul>

        <section className={styles.logo}>
          <NavLink  to={{ pathname: "/" }}>
            <Logo />
          </NavLink>
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

