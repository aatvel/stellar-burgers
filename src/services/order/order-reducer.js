import {
  SHOW_ORDER_DETAILS,
  CLOSE_ORDER_DETAILS,
  ORDER_LOADING,
  ORDER_SUCCESS,
  ORDER_ERROR,
  RESET_ORDER
} from "./order-actions";

const initialState = {
  order: null,
  loading: false,
  error: false,
  showOrderModal: false,
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ORDER_DETAILS: {
      return { showOrderModal: true, order: payload };
    }
    case CLOSE_ORDER_DETAILS: {
      return { showOrderModal: false, order: null };
    }
    case ORDER_LOADING: {
      return { ...state, loading: true };
    }
    case ORDER_SUCCESS: {
      return {
        ...state,
        showOrderModal: true,
        order: payload,
        loading: false,
      };
    }
    case ORDER_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case RESET_ORDER: {
      return {
        ...state,
        order: null
      }
    }
    default: {
      return state;
    }
  }
};