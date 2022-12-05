
export const SHOW_ORDER_DETAILS = "SHOW_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";
export const LOAD_ORDER_START = "LOAD_ORDER_START";
export const LOAD_ORDER_SUCCESS = "LOAD_ORDER_SUCCESS";
export const LOAD_ORDER_ERROR = "LOAD_ORDER_ERROR";
export const RESET_ORDER = 'RESET_ORDER'

export const showOrderDetails = (item) => ({
  type: SHOW_ORDER_DETAILS,
  payload: item,
});

export const closeOrderDetails = () => ({
  type: CLOSE_ORDER_DETAILS,
});

export const onLoadingStart = (orderedIngredients) => ({
  type: LOAD_ORDER_START,
  payload: orderedIngredients
})

export const onLoadingSuccess= (res) => ({
  type: LOAD_ORDER_SUCCESS,
  payload: res
})

export const onLoadingError = (error) => ({
  type: LOAD_ORDER_ERROR,
  payload: error
})





