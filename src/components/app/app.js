import React from "react";
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { getIngredients } from "../../utils/api-ingredients.js";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
const url = `https://norma.nomoreparties.space/api/ingredients`;

function PreLoader() {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
}

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [ingredientsLoading, setIngredientsLoading] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [orderModal, setOrderModal] = React.useState(false);
  const [ingredient, setIngredient] = React.useState();

  React.useEffect(() => {
    getIngredients(url)
      .then(setIngredients)
      .catch(() => alert("Во время загрузки что-то пошло не так"))
      .finally(() => setIngredientsLoading(false));
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleOrderModal = () => {
    setOrderModal(!orderModal);
  };

  return (
    <div className={appStyles.page}>
      <AppHeader />
      {ingredientsLoading ? (
        <PreLoader />
      ) : (
        <>
          <main className={appStyles.content}>
            <BurgerIngredients data={ingredients} toggleModal={toggleModal} setIngredient={setIngredient} />

            <BurgerConstructor
              data={ingredients}
              toggleModal={toggleOrderModal}
            />
          </main>
        </>
      )}
      {modal && (
        <Modal title="Детали ингредиента" toggleModal={toggleModal}>
          <IngredientDetails ingredient={ingredient}  />
        </Modal>
      )}
      {orderModal && (
        <Modal toggleModal={toggleOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

export default App;
