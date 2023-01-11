import { TItem } from "../../utils/types";

export const SHOW_ORDER_DETAILS: 'SHOW_ORDER_DETAILS' = "SHOW_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS: 'CLOSE_ORDER_DETAILS' = "CLOSE_ORDER_DETAILS";
export const LOAD_ORDER_START: 'LOAD_ORDER_START' = "LOAD_ORDER_START";
export const LOAD_ORDER_SUCCESS: 'LOAD_ORDER_SUCCESS' = "LOAD_ORDER_SUCCESS";
export const LOAD_ORDER_ERROR: 'LOAD_ORDER_ERROR' = "LOAD_ORDER_ERROR";
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER'

export interface IshowOrderDetails {
  readonly type: typeof SHOW_ORDER_DETAILS;
  readonly payload: TItem
}

export interface IgetCurrentUserError {
  readonly type: typeof CLOSE_ORDER_DETAILS;
}

export interface IonLoadingStart {
  readonly type: typeof LOAD_ORDER_START;
  readonly payload: {ingredients: Array<string>}
}

export interface IonLoadingSuccess {
  readonly type: typeof LOAD_ORDER_SUCCESS;
  readonly payload: number
}

export interface IonLoadingError {
  readonly type: typeof LOAD_ORDER_ERROR;
  readonly payload: string
}

export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export type IOrderActions = IshowOrderDetails | IgetCurrentUserError | IonLoadingStart | IonLoadingSuccess | IonLoadingError | IResetOrder

export const showOrderDetails = (item: TItem): IshowOrderDetails => ({
  type: SHOW_ORDER_DETAILS,
  payload: item,
});

export const closeOrderDetails = ():IgetCurrentUserError => ({
  type: CLOSE_ORDER_DETAILS,
});

export const onLoadingStart = (orderedIngredients: { ingredients: Array<string>; }):IonLoadingStart => ({
  type: LOAD_ORDER_START,
  payload: orderedIngredients
})

export const onLoadingSuccess= (res: number):IonLoadingSuccess => ({
  type: LOAD_ORDER_SUCCESS,
  payload: res
})

export const onLoadingError = (error: string):IonLoadingError => ({
  type: LOAD_ORDER_ERROR,
  payload: error
})


export const onResetOrder = (): IResetOrder => ({
  type: RESET_ORDER
})


