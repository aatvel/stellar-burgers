import React from "react";
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from "../../utils/data";

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />

      <main className={appStyles.content}>
        <BurgerIngredients data={data} />

        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

export default App;

