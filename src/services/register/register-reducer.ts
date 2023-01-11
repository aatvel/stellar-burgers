import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./register-actions";
import { IRegisterActions } from "./register-actions";

const initialState = {
  user: {},
  loading: false,
  error: false
};

export const registerReducer = (state = initialState, { type, payload }: IRegisterActions) => {
  switch (type) {
    case REGISTER_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        user: payload,
        loading: false,
      };
    }
    case REGISTER_USER_ERROR: {
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
