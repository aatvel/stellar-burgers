import {
  SHOW_ORDER_DETAILS,
  CLOSE_ORDER_DETAILS,
  LOAD_ORDER_START,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_ERROR,
  RESET_ORDER
} from "./order-actions";
import { IOrderActions } from "./order-actions";

const initialState = {
  order: null,
  loading: false,
  error: false,
  showOrderModal: false,
};

export const orderReducer = (state = initialState, { type, payload }: IOrderActions) => {
  switch (type) {
    case SHOW_ORDER_DETAILS: {
      return { showOrderModal: true, order: payload };
    }
    case CLOSE_ORDER_DETAILS: {
      return { showOrderModal: false, order: null };
    }
    case LOAD_ORDER_START: {
      return { ...state, loading: true };
    }
    case LOAD_ORDER_SUCCESS: {
      return {
        ...state,
        showOrderModal: true,
        order: payload,
        loading: false,
      };
    }
    case LOAD_ORDER_ERROR: {
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