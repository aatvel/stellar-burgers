import React from "react";
import ingredient from "../burger-ingredients/ingredient/ingredient";
import Ingredient from "../burger-ingredients/ingredient/ingredient";
import categoryStyles from './ingredients-category.module.css';

const IngredientCategory = ({
    title,
    titleId,
    ingredients,
    onIngredientClick
}) => {
    return(
        <>
        <h3 className="text text_type_main-medium" id={titleId}>{title}</h3>
        <div className="categoryStyles.items">
            {ingredients.map((ingredient) => {
                return(
                    <Ingredient
                        ingredientData={ingredient}
                        key={ingredient._id}
                        count={1}
                        onClick={onIngredientClick}
                    />
                )
            })}

        </div>
        </>
    )
}

export {IngredientCategory}