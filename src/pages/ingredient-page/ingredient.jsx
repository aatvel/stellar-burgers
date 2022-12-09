import React, { useEffect } from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";


const styleIngredient = {
  width: 720,
  padding: "0 80px",
  margin: "0 auto",
  marginTop: 120,
  textAlign: "center",
  overflow: 'hidden'
  
};

export function IngredientPage(background) {
  return (
    <div style={styleIngredient}>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      <IngredientDetails  />
    </div>
  );
}
