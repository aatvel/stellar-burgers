export const SHOW_ORDER_DETAILS = "SHOW_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";
export const ORDER_LOADING = "ORDER_LOADING";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_ERROR = "ORDER_ERROR";

export const showOrderDetails = (item) => ({
  type: SHOW_ORDER_DETAILS,
  payload: item,
});

export const closeOrderDetails = () => ({
  type: CLOSE_ORDER_DETAILS,
});

export const loadOrderStart = () => ({
  type: ORDER_LOADING,
});

export const loadOrderSuccess = (data) => ({
  type: ORDER_SUCCESS,
  payload: data,
});
export const loadingOrderError = () => ({
  type: ORDER_ERROR,
});
