import React from "react";
import IngredientsStyles from "./ingredient.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd/dist/hooks";


import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setBun, setMainsAndSauces } from "../../../services/constructor-ingredients/constructor-actions";
import { showDetails } from "../../../services/ingredient-details/details-actions";

const Ingredient = (props) => {
  const { ingredientData, count } = props;
  const { buns, mainsAndSauces } = useSelector(
    (state) => state.constructorReducer
  );
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(showDetails(ingredientData))
    console.log(ingredientData)
    if(ingredientData.type === 'bun'){dispatch(setBun(ingredientData))} 
    else {dispatch(setMainsAndSauces(ingredientData))}    
  };

 const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredientData
  })

  const counter = React.useMemo(() => {
    return ingredientData.type !== 'bun'
      ? mainsAndSauces.filter((item) => item._id === ingredientData._id).length
      : buns?._id === ingredientData._id
      ? 2
      : 0
  }, [mainsAndSauces, buns])



  return (
    <li ref={dragRef} className={IngredientsStyles.ingredient} onClick={handleClick}>
      {counter !== 0 && (<Counter count={counter} size="default" extraClass="m-1" />)}
      <img
        className="ml-4 mr-4"
        src={ingredientData.image}
        alt={ingredientData.name}
      />
      <div className={`${IngredientsStyles.price} mt-2 mb-2`}>
        <span className="text text_type_digits-default">
          {ingredientData.price}
        </span>
        <span className={IngredientsStyles.currency}>
          <CurrencyIcon />
        </span>
      </div>
      <p className="text text text_type_main-default">
        {ingredientData.name}
      </p>
    </li>
  );
};

// Ingredient.propTypes = {
//   ingredientData: ingredientType.isRequired,
//   toggleModal: PropTypes.func.isRequired,
//   setIngredient: PropTypes.func.isRequired,
//   count: PropTypes.number.isRequired,
// };

export default React.memo(Ingredient);
