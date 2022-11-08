import React from "react";
import IngredientsStyles from "./ingredient.module.css";
import PropTypes from "prop-types";

import {
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredient = (props) => {
  const handleClick = () => {
    props.toggleModal();
    props.setIngredient(props.data);
  }
  return (
    <li className={IngredientsStyles.ingredient} onClick={handleClick}>
      <img className="ml-4 mr-4" src={props.data.image} alt={props.data.name} />
      <div className={`${IngredientsStyles.price} mt-2 mb-2`}>
        <span className="text text_type_digits-default">
          {props.data.price}
        </span>
        <span className={IngredientsStyles.currency}>
          <CurrencyIcon />
        </span>
      </div>
      <p className="text text text_type_main-default">{props.data.name}</p>
    </li>
  );
};

export default React.memo(Ingredient);
