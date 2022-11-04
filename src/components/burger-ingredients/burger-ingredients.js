import React from 'react';
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import Ingredient from "./ingredient/ingredient";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';



class MenuItem extends React.Component{
    render(){
        return(
            <section className={'margin-top: 40px'} id={this.props.id} >
            <h2 className={BurgerIngredientsStyles.headline}>{this.props.text}</h2>
            <ul className={BurgerIngredientsStyles.description}>{this.props.function}</ul>
          </section>
        )
    }
}

const BurgerIngredients = (props) => {

    const [current, setCurrent] = React.useState('bun');
    const buns = props.data.filter(item => item.type === 'bun');
    const sauces = props.data.filter(item => item.type === 'sauce');
    const mains = props.data.filter(item => item.type === 'main');

    return (
     <section className={`${BurgerIngredientsStyles.ingredientsMenu} `}>

        <h1 className="text text_type_main-large mb-5 pt-10">Соберите бургер</h1>
        
          
            <div className={BurgerIngredientsStyles.tabMenu}>
              <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булочки
              </Tab>
              <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
              </Tab>
              <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
              </Tab>
            </div>
        
  <nav className={BurgerIngredientsStyles.ingredients}>
    
        <nav className={BurgerIngredientsStyles.buns}>
           <MenuItem value='bun' text='Булочки' function={buns.map(element => <Ingredient id={element._id} data={element}/>)} />
        </nav>
        <nav className={BurgerIngredientsStyles.sauses}>
            <MenuItem value='sauce' text='Соусы' function={sauces.map(element => <Ingredient id={element._id} data={element}/>)} />
        </nav>
        <nav className={BurgerIngredientsStyles.mains}>
            <MenuItem value='main' text='Начинки' function={mains.map(element => <Ingredient id={element._id} data={element}/>)} />          
        </nav>
  </nav>
      </section>
    )
  }


  MenuItem.propTypes = {
      id: PropTypes.number,
      text: PropTypes.string,
      function:PropTypes.func
  };
  
export default BurgerIngredients;
 