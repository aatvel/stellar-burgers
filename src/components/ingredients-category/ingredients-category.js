import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Ingredient from "../burger-ingredients/ingredient/ingredient";
import categoryStyles from "./ingredients-category.module.css";
import { ingredientType } from "../../utils/types";

const IngredientCategory = ({ title, titleId, ingredients }) => {
  const { data } = useSelector((state) => state.ingredients);
  const orderedMains = data && data.filter((item) => item.type === ingredients);

  return (
    <div>
      <h3 className="text text_type_main-medium" id={titleId}>
        {title}
      </h3>
      <section className={categoryStyles.items}>
        {orderedMains.map((ingredient) => (
          <Ingredient
            ingredientData={ingredient}
            key={ingredient._id}
 
          />
        ))}
      </section>
    </div>
  );
};
IngredientCategory.propTypes = {
  ingredients: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
};
export { IngredientCategory };
