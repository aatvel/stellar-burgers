import { BURGER_API_URL } from "../../utils/consts";
import { checkResponse } from "../../utils/api-ingredients";
import { CONSTRUCTOR_RESET } from "../constructor-ingredients/constructor-actions";


export const SHOW_ORDER_DETAILS = "SHOW_ORDER_DETAILS";
export const CLOSE_ORDER_DETAILS = "CLOSE_ORDER_DETAILS";
export const ORDER_LOADING = "ORDER_LOADING";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_ERROR = "ORDER_ERROR";
export const RESET_ORDER = 'RESET_ORDER'

export const showOrderDetails = (item) => ({
  type: SHOW_ORDER_DETAILS,
  payload: item,
});

export const closeOrderDetails = () => ({
  type: CLOSE_ORDER_DETAILS,
});




export const fetchOrder = (data) =>  {
  return function (dispatch){
  dispatch({type: ORDER_LOADING});
  fetch(`${BURGER_API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     },
    body: JSON.stringify(data),
  })
    .then(checkResponse)
    .then((result) => {
      dispatch({type: ORDER_SUCCESS,
        payload: result.order.number});
    })
    .then(dispatch({type: CONSTRUCTOR_RESET}))
    
    .catch(() => dispatch({type: ORDER_ERROR}));}
}
