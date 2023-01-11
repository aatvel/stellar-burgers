import PropTypes from "prop-types";
import { TConstructorActions } from '../services/constructor-ingredients/constructor-actions';
import { TEditActions } from '../services/edit-user/edit-actions';
import { TDetailsActions } from '../services/ingredient-details/details-actions';
import { TIngredientsActions } from '../services/ingredients/ingredients-actions';
import { TLoginActions } from '../services/login/login-actions';
import { IOrderActions } from '../services/order/order-actions';
import { IRegisterActions } from '../services/register/register-actions';
import { TResetActions } from '../services/reset-password/reset-actions';
import { TRestoreActions } from '../services/restore-password/restore-actions';
import { store } from "../services/store";

export const ingredientType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
});

export type TItem = {
  _id: string,
  name: string,
  type: "bun" | "main" | "sauce",
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  constId?: number,
  index?: number,
  count: number,
};

export type AppActions = TConstructorActions | TEditActions 
| TDetailsActions | TIngredientsActions | TLoginActions
| IOrderActions | IRegisterActions | TResetActions | TRestoreActions

// Типизация описания хранилища
export type RootState = ReturnType<typeof store.getState>;