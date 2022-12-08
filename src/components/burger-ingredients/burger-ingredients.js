import React from "react";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { IngredientCategory } from "../ingredients-category/ingredients-category";

import { PreLoader } from "../app/preloader";

import { INGREDIENT_TYPES } from "../../utils/consts";


export default function BurgerIngredients({}) {
  const [current, setCurrent] = React.useState("bun");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.ingredients);



  const onTabClick = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTab = (e) => {
    const scroll = e.target.scrollTop;
    scroll <= 220
      ? setCurrent(INGREDIENT_TYPES.BUN)
      : scroll <= 720
      ? setCurrent(INGREDIENT_TYPES.SAUCE)
      : setCurrent(INGREDIENT_TYPES.MAIN);
  };

  return (
    <section className={`${BurgerIngredientsStyles.ingredientsMenu} `}>
      <h1 className="text text_type_main-large mb-5 pt-10">Соберите бургер</h1>

      <div className={BurgerIngredientsStyles.tabMenu}>
        <Tab
          value={`${INGREDIENT_TYPES.BUN}`}
          active={current === INGREDIENT_TYPES.BUN}
          onClick={onTabClick}
        >
          Булочки
        </Tab>
        <Tab
          value={`${INGREDIENT_TYPES.SAUCE}`}
          active={current === INGREDIENT_TYPES.SAUCE}
          onClick={onTabClick}
        >
          Соусы
        </Tab>
        <Tab
          value={`${INGREDIENT_TYPES.MAIN}`}
          active={current === INGREDIENT_TYPES.MAIN}
          onClick={onTabClick}
        >
          Начинки
        </Tab>
      </div>

      {loading ? (
        <PreLoader />
      ) : (
        <span
          className={BurgerIngredientsStyles.ingredients}
          onScroll={scrollTab}
        >
          <IngredientCategory
            titleId="bun"
            title="Булочки"
            ingredients={INGREDIENT_TYPES.BUN}
          />

          <IngredientCategory
            titleId="sauce"
            title="Соусы"
            ingredients={INGREDIENT_TYPES.SAUCE}
          />

          <IngredientCategory
            titleId="main"
            title="Начинки"
            ingredients={INGREDIENT_TYPES.MAIN}
          />
        </span>
      )}
    
    </section>
  );
}
