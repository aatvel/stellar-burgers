import { combineReducers } from 'redux';
import { constructorReducer } from './constructor-ingredients/constructor-reducer';
import { detailsReducer } from './ingredient-details/details-reducer';
import {ingredientsReducer} from  './ingredients/ingredients-reducer'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructor: constructorReducer,
    details: detailsReducer
  });
  