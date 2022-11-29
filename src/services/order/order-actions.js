import { BURGER_API_URL } from "../../utils/consts";
import { checkResponse } from "../../utils/api-ingredients";
import { CONSTRUCTOR_RESET } from "../constructor-ingredients/constructor-actions";
// import { request } from '../../utils/api-ingredients';


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






// export const fetchOrder = (data) =>  {
//   return function (dispatch){
//   dispatch({type: ORDER_LOADING});
//   fetch(`${BURGER_API_URL}/orders`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//      },
//     body: JSON.stringify(data),
//   })
//     .then(checkResponse)
//     .then((result) => {
//       dispatch({type: ORDER_SUCCESS,
//         payload: result.order.number});
//     })
//     .then(dispatch({type: CONSTRUCTOR_RESET}))
    
//     .catch(() => dispatch({type: ORDER_ERROR}));}
// }
