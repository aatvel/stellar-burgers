import React from "react";
import IngredientsStyles from "./ingredient.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../../utils/types";

import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredient = (props) => {
  const {count} = props
  const handleClick = () => {
    props.toggleModal();
    props.setIngredient(props.ingredientData);
  };
  return (
    <li className={IngredientsStyles.ingredient} onClick={handleClick}>
      {count && <Counter count={count} size="default" extraClass="m-1" />}
      <img className="ml-4 mr-4" src={props.ingredientData.image} alt={props.ingredientData.name} />
      <div className={`${IngredientsStyles.price} mt-2 mb-2`}>
        <span className="text text_type_digits-default">
          {props.ingredientData.price}
        </span>
        <span className={IngredientsStyles.currency}>
          <CurrencyIcon />
        </span>
      </div>
      <p className="text text text_type_main-default">{props.ingredientData.name}</p>
    </li>
  );
};

Ingredient.propTypes = {
  ingredientData: ingredientType.isRequired,
  toggleModal: PropTypes.func,
  setIngredient: PropTypes.func
};

export default React.memo(Ingredient);
