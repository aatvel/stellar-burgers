import { combineReducers } from 'redux';

import { constructorReducer } from './constructor-ingredients/constructor-reducer';
import { detailsReducer } from './ingredient-details/details-reducer';
import {ingredientsReducer} from  './ingredients/ingredients-reducer'
import { orderReducer } from './order/order-reducer';
import { restoreReducer } from './restore-password/restore-reducer';
import { resetReducer } from './reset-password/reset-reducer';
import { registerReducer } from './register/register-reducer';
import { loginReducer } from './login/login-reducer';
import { editReducer } from './edit-user/edit-reducer';
import { wsReducer } from './ws/ws-reducer';
import { modalReducer } from './modal/modal-reducer';




export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorReducer: constructorReducer,
    details: detailsReducer,
    orderReducer: orderReducer,
    restoreReducer,
    resetReducer,
    registerReducer,
    loginReducer,
    editReducer,
    wsReducer,
    modalReducer    
});
   

