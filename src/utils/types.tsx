import PropTypes from "prop-types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../services/store";import { TConstructorActions } from "../services/constructor-ingredients/constructor-actions";
import { TEditActions } from "../services/edit-user/edit-actions";
import { TDetailsActions } from "../services/ingredient-details/details-actions";
import { TIngredientsActions } from "../services/ingredients/ingredients-actions";
import { TLoginActions } from "../services/login/login-actions";
import { IOrderActions } from "../services/order/order-actions";
import { IRegisterActions } from "../services/register/register-actions";
import { TResetActions } from "../services/reset-password/reset-actions";
import { TRestoreActions } from "../services/restore-password/restore-actions";
import { TWSActions, WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../services/ws/ws-actions";
import { ModalActions } from "../services/modal/modal-reducer";

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
  _id: string;
  id?: string
  name: string;
  type: "bun" | "main" | "sauce";
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  constId?: number;
  index?: number;
  count: number;
};

export type TUniqueIngredient = {
  uuid: string
} & TItem


export interface IEditUser {
  success?: string;
  user?: {
    email?: string;
    name?: string;
  };
}

export type TUser = {
  email?: string;
  password?: string;
  name?: string;
};

export interface IRegister {
  success: string;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
  message: string;
}

export interface IRestore {
  success?: string;
  message?: string;
}

export interface IOnLoading {
  ingredients: Array<string>
}

export enum StatusCodes {
  created = "created",
  pending = "pending",
  done = "done",
}

export interface IOrder {
  readonly ingredients: ReadonlyArray<string>;
  readonly data: ReadonlyArray<string>;
  readonly _id: string;
  readonly status: StatusCodes;
  readonly number: number;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly name: string;
}

export interface IWSMessage {
  readonly success: boolean;
  readonly orders: ReadonlyArray<IOrder> ;
  readonly total: number ;
  readonly totalToday: number ;
}

export type TOrderResponse = {
  success: boolean;
  name: string;
  order: {
    ingredients: TItem;
    _id: string;
    owner?: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
};

export type TCurrentOrderResponse = {
  success: boolean;
  orders: TCurrentOrder[];
};

export type TCurrentOrder = {
  _id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
};


export type AppActions =
  | TConstructorActions
  | TEditActions
  | TDetailsActions
  | TIngredientsActions
  | TLoginActions
  | IOrderActions
  | IRegisterActions
  | TResetActions
  | TRestoreActions
  | TWSActions
  | ModalActions;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export type TSocketMiddlewareActions = {
  readonly onStart: typeof WS_CONNECTION_START
  readonly onOpen: typeof WS_CONNECTION_SUCCESS
  readonly onError: typeof WS_CONNECTION_ERROR
  readonly onClose: typeof WS_CONNECTION_CLOSED
  readonly onMessage: typeof WS_GET_MESSAGE
  readonly sendMessage: typeof WS_SEND_MESSAGE
}
