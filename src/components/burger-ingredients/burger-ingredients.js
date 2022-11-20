import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import Ingredient from "./ingredient/ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { IngredientCategory } from "../ingredients-category/ingredients-category";
import { getIngredients } from "../../utils/api-ingredients";
import {
  loadingIngredientsError,
  loadIngredientsStart,
  loadIngredientsSuccess,
} from "../../services/ingredients/ingredients-actions";
import { PreLoader } from "../app/preloader";



export default function BurgerIngredients({}) {
  const [current, setCurrent] = React.useState("bun");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.ingredients);
  React.useEffect(() => {
    dispatch(loadIngredientsStart());
    getIngredients()
      .then((data) => dispatch(loadIngredientsSuccess(data)))
      .catch(() => dispatch(loadingIngredientsError()));    
    // .finally(() => setIngredientsLoading(false));
  }, []);

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

      {loading ? (<PreLoader/>) :

      <span className={BurgerIngredientsStyles.ingredients}>
        <IngredientCategory
          titleId="bun"
          title="Булочки"
          ingredients={buns}
          // toggleModal={toggleModal}
          // setIngredient={setIngredient}
        />

        <IngredientCategory
          titleId="sauce"
          title="Соусы"
          ingredients={sauces}
          // toggleModal={toggleModal}
          // setIngredient={setIngredient}
        />

        <IngredientCategory
          titleId="main"
          title="Начинки"
          ingredients={mains}
          // toggleModal={toggleModal}
          // setIngredient={setIngredient}
        />
      </span>}
    </section>
  );
}

// BurgerIngredients.propTypes = {
//   data: PropTypes.arrayOf(ingredientType.isRequired)
// };
