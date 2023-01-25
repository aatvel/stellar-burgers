import {
  RESET_PASSWORD_REQUEST,
RESET_PASSWORD_SUCCESS,
RESET_PASSWORD_ERROR
} from "./reset-actions";
import { TResetActions } from "./reset-actions";

type TResetState = {
  password: string | null,
  token: string | null,
  loading: boolean,
  error: boolean
}

export const initialState: TResetState = {
  password: null,
  token: null,
  loading: false,
  error: false
};

export const resetReducer = (state = initialState, actions: TResetActions) => {
  switch (actions.type) {
    case RESET_PASSWORD_REQUEST: {
      return { ...state, loading: true };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        password: actions.payload,
        loading: false,
      };
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
