import {
  SHOW_ORDER_DETAILS,
  CLOSE_ORDER_DETAILS,
  LOAD_ORDER_START,
  LOAD_ORDER_SUCCESS,
  LOAD_ORDER_ERROR,
  RESET_ORDER
} from "./order-actions";
import { IOrderActions } from "./order-actions";

type TOrderState = {
  order: number | undefined,
  loading: boolean,
  error: boolean,
  showOrderModal: boolean,
}
export const initialState: TOrderState = {
  order: undefined,
  loading: false,
  error: false,
  showOrderModal: false,
};

export const orderReducer = (state = initialState, actions: IOrderActions) => {
  switch (actions.type) {
    case SHOW_ORDER_DETAILS: {
      return { showOrderModal: true, order: actions.payload };
    }
    case CLOSE_ORDER_DETAILS: {
      return { showOrderModal: false, order: undefined };
    }
    case LOAD_ORDER_START: {
      return { ...state, loading: true , showOrderModal: true};
    }
    case LOAD_ORDER_SUCCESS: {
      return {
        ...state,
        showOrderModal: true,
        order: actions.payload,
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