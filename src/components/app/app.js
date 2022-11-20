import React from "react";
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { getIngredients } from "../../utils/api-ingredients.js";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { OrderContext } from "../../services/order-context";
import { PreLoader } from "./preloader";

function App() {


  return (
    <div className={appStyles.page}>
      <AppHeader />

        <main className={appStyles.content}>
          <BurgerIngredients
            // data={ingredients}
            // toggleModal={toggleModal}
            // setIngredient={setIngredient}
          />
          
            {/* <BurgerConstructor
              toggleModal={toggleOrderModal}
              setOrderNumber={setOrderNumber}
            /> */}

        </main>

      {/* {ingredientModal && (
        <Modal title="Детали ингредиента" toggleModal={toggleModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
      {orderModal && (
        <Modal toggleModal={toggleOrderModal}>
          <OrderDetails orderNumber={order} />
        </Modal>
      )} */}
    </div>
  );
}

export default App;
