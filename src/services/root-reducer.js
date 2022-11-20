import { combineReducers } from 'redux';
import {ingredientsReducer} from  './ingredients/ingredients-reducer'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer
  });
  