import React from "react";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import Ingredient from "./ingredient/ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import {IngredientCategory} from '../ingredients-category/ingredients-category'
import Modal from "../modal/modal";

class MenuItem extends React.Component {
  render() {
    return (
      <section className={"margin-top: 40px"}>
        <h2 className={BurgerIngredientsStyles.headline}>{this.props.text}</h2>
        <ul className={BurgerIngredientsStyles.description}>
          {this.props.function}
        </ul>
      </section>
    );
  }
}

export default function BurgerIngredients({
  data,
  toggleModal,
  setIngredient,
}) {
  const [current, setCurrent] = React.useState("bun");


  const onTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const buns = React.useMemo(
    () => data.filter((item) => item.type === "bun"),
    [data]
  );
  const sauces = React.useMemo(
    () => data.filter((item) => item.type === "sauce"),
    [data]
  );
  const mains = React.useMemo(
    () => data.filter((item) => item.type === "main"),
    [data]
  );

  return (
    <section className={`${BurgerIngredientsStyles.ingredientsMenu} `}>
      <h1 className="text text_type_main-large mb-5 pt-10">Соберите бургер</h1>

      <div className={BurgerIngredientsStyles.tabMenu}>
        <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
          Булочки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={onTabClick}>
          Начинки
        </Tab>
      </div>

      <nav className={BurgerIngredientsStyles.ingredients}>
        <nav className={BurgerIngredientsStyles.buns}>
          <IngredientCategory
            titleId="buns"
            title="Булочки"
            ingredients={buns}

          />
        </nav>
        <nav className={BurgerIngredientsStyles.sauses}>
          <IngredientCategory
            titleId="sauces"
            title="Соусы"
            ingredients={sauces}

          />
        </nav>
        <nav className={BurgerIngredientsStyles.mains}>
          <IngredientCategory
            titleId="mains"
            title="Начинки"
            ingredients={mains}

          />
        </nav>
      </nav>
    </section>
   
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType),
  toggleModal: PropTypes.func,
  setIngredient: PropTypes.func,
};
