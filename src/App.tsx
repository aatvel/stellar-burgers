import React from 'react';
import logo from './logo.svg';
import appStyles from './App.module.css';
import AppHeader from '../src/components/app-header/app-header'
import BurgerConstructor from "../src/components/burger-constructor/burger-constructor";
import BurgerIngredients from "../src/components/burger-ingredients/burger-ingredients";
import data from './utils/data';


function App() {
  return (
    <>
    <AppHeader />

    <main className={appStyles.content} >
      <BurgerIngredients data={data}/>
      
      <BurgerConstructor data={data}/>
    </main>
    
</>
  );
}

export default App;
