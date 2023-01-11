
export const SHOW_ORDER_DETAILS: 'SHOW_ORDER_DETAILS' = "SHOW_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS: 'CLOSE_ORDER_DETAILS' = "CLOSE_ORDER_DETAILS";
export const LOAD_ORDER_START: 'LOAD_ORDER_START' = "LOAD_ORDER_START";
export const LOAD_ORDER_SUCCESS: 'LOAD_ORDER_SUCCESS' = "LOAD_ORDER_SUCCESS";
export const LOAD_ORDER_ERROR: 'LOAD_ORDER_ERROR' = "LOAD_ORDER_ERROR";
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER'

export interface IshowOrderDetails {
  readonly type: typeof SHOW_ORDER_DETAILS;
  readonly payload: any
}

export interface IgetCurrentUserError {
  readonly type: typeof CLOSE_ORDER_DETAILS;
  readonly payload: undefined
}

export interface IonLoadingStart {
  readonly type: typeof LOAD_ORDER_START;
  readonly payload: any
}

export interface IonLoadingSuccess {
  readonly type: typeof LOAD_ORDER_SUCCESS;
  readonly payload: any
}

export interface IonLoadingError {
  readonly type: typeof LOAD_ORDER_ERROR;
  readonly payload: any
}

export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
  readonly payload: any
}

export type IOrderActions = IshowOrderDetails | IgetCurrentUserError | IonLoadingStart | IonLoadingSuccess | IonLoadingError | IResetOrder

export const showOrderDetails = (item: any) => ({
  type: SHOW_ORDER_DETAILS,
  payload: item,
});

export const closeOrderDetails = () => ({
  type: CLOSE_ORDER_DETAILS,
});

export const onLoadingStart = (orderedIngredients: { ingredients: any[]; }) => ({
  type: LOAD_ORDER_START,
  payload: orderedIngredients
})

export const onLoadingSuccess= (res: any) => ({
  type: LOAD_ORDER_SUCCESS,
  payload: res
})

export const onLoadingError = (error: any) => ({
  type: LOAD_ORDER_ERROR,
  payload: error
})





