import { combineReducers } from 'redux';
import { constructorReducer } from './constructor-ingredients/constructor-reducer';
import { detailsReducer } from './ingredient-details/details-reducer';
import {ingredientsReducer} from  './ingredients/ingredients-reducer'
import { orderReducer } from './order/order-reducer';
import { restoreReducer } from './restore-password/restore-reducer';
import { resetReducer } from './reset-password/reset-reducer';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorReducer: constructorReducer,
    details: detailsReducer,
    orderReducer: orderReducer,
    restoreReducer,
    resetReducer
  });
  