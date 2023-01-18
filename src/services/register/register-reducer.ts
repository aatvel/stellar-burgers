import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./register-actions";
import { IRegisterActions } from "./register-actions";
import { TUser } from "../../utils/types";

type TRegisterState = {
  user: TUser | {}
  loading: boolean,
  error: boolean
}

const initialState: TRegisterState = {
  user: {},
  loading: false,
  error: false
};

export const registerReducer = (state = initialState, actions: IRegisterActions) => {
  switch (actions.type) {
    case REGISTER_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        user: actions.payload,
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
