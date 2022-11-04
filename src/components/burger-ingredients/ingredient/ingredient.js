import React from "react";
import IngredientsStyles from "./ingredient.module.css";
import PropTypes from "prop-types";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredient = (props) => {
  return (
    <li className={IngredientsStyles.ingredient} id={props.data._id}>
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

Ingredient.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export {Ingredient};
