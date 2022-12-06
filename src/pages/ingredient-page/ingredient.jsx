import React, { useEffect } from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { showDetails } from "../../services/ingredient-details/details-actions";
import { loadIngredientsStart } from "../../services/ingredients/ingredients-actions";

const styleIngredient = {
  width: 720,
  padding: "0 80px",
  margin: "0 auto",
  marginTop: 120,
  textAlign: "center",
};

export function IngredientPage() {
  const state = useSelector((store) => store);
console.log(state)


  //   if (!details.length) return null;

  return (
    <div style={styleIngredient}>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      <IngredientDetails />
    </div>
  );
}
