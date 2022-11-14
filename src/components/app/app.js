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

function PreLoader() {
  return <h2>Loading...</h2>;
}

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [ingredientsLoading, setIngredientsLoading] = React.useState(true);
  const [ingredientModal, setIngredientModal] = React.useState(false);
  const [orderModal, setOrderModal] = React.useState(false);
  const [ingredient, setIngredient] = React.useState();
  const [order, setOrder] = React.useState();

  React.useEffect(() => {
    getIngredients()
      .then(setIngredients)
      .catch(() => alert("Во время загрузки что-то пошло не так"))
      .finally(() => setIngredientsLoading(false));
  }, []);

  const toggleModal = () => {
    setIngredientModal(!ingredientModal);
  };

  const toggleOrderModal = () => {
    setOrderModal(!orderModal);
  };

  const setOrderNumber = (orderNumber) => {
    setOrder(orderNumber)
  }


  return (
    <div className={appStyles.page}>
      <AppHeader />
      {ingredientsLoading ? (
        <PreLoader />
      ) : (
        <main className={appStyles.content}>
          <BurgerIngredients
            data={ingredients}
            toggleModal={toggleModal}
            setIngredient={setIngredient}
          />
          <OrderContext.Provider value={ingredients}>
            <BurgerConstructor        
              toggleModal={toggleOrderModal}
              setOrderNumber={setOrderNumber}
            />
          </OrderContext.Provider>
        </main>
      )}
      {ingredientModal && (
        <Modal title="Детали ингредиента" toggleModal={toggleModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
      {orderModal && (
        <Modal toggleModal={toggleOrderModal}>
          <OrderDetails orderNumber={order} />
        </Modal>
      )}
    </div>
  );
}

export default App;
