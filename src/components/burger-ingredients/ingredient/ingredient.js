import React from 'react';
import IngredientsStyles from "./ingredient.module.css";
import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Ingredient = (props) => {

    class CurrencyIcons extends React.Component{
        render(){
            return(
                <ul className={IngredientsStyles.currency} >
                    {this.props.icon}
                </ul>
            )
        }
    }
    

    return (
      <li className={IngredientsStyles.ingredient} key={props.data._id} >
        <img className="ml-4 mr-4" src={props.data.image} alt={props.data.name}/>
        <div className={`${IngredientsStyles.price} mt-2 mb-2`}>
          <span className="text text_type_digits-default">{props.data.price}</span>
          <CurrencyIcons  icon={<CurrencyIcon type="primary" />}  alt="Валюта" />
        </div>
        <p className="text text text_type_main-default">{props.data.name}</p>
      </li>
    )
}

Ingredient.propTypes = {
    _id: PropTypes.number,
    name:PropTypes.string,
    price: PropTypes.number
  };
  
export default Ingredient