import React, { FC , CSSProperties  } from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";


const styleIngredient: CSSProperties  = {
  width: 720,
  padding: "0 80px",
  margin: "0 auto",
  marginTop: 120,
  textAlign: "center",
  overflow: 'hidden'
  
};

const  IngredientPage:FC = () =>{
  return (
    <div style={styleIngredient}>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      <IngredientDetails background={null} />
    </div>
  );
}

export default IngredientPage