import React from "react";
import PropTypes from "prop-types";
import ingredient from "../burger-ingredients/ingredient/ingredient";
import Ingredient from "../burger-ingredients/ingredient/ingredient";
import categoryStyles from "./ingredients-category.module.css";
import { ingredientType } from "../../utils/types";

const IngredientCategory = ({
  title,
  titleId,
  ingredients,
  count
}) => {


  return (
    <>
      <h3 className="text text_type_main-medium" id={titleId}>
        {title}
      </h3>
      <div className={categoryStyles.items}>
        {ingredients.map((ingredient) => {
          return (
            <Ingredient
              ingredientData={ingredient}
              key={ingredient._id}
              count={count}
            />
          );
        })}
      </div>
    </>
  );
};
// IngredientCategory.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
//   title: PropTypes.string.isRequired,
//   titleId: PropTypes.string.isRequired,
//   toggleModal: PropTypes.func.isRequired,
//   setIngredient: PropTypes.func.isRequired,
// };
export { IngredientCategory };
