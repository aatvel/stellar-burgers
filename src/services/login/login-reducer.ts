import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from "./login-actions";
import { TLoginActions } from "./login-actions";
import { TUser } from "../../utils/types";

type TLoginState = {
  tokenUser: string | null,
  currentUser: TUser | null,
  loading: boolean,
  error: boolean,
  isLoggedIn: boolean
}

const initialState: TLoginState = {
  tokenUser: null,
  currentUser: null,
  loading: false,
  error: false,
  isLoggedIn: false
};

export const loginReducer = (state = initialState, actions: TLoginActions) => {
  switch (actions.type) {
    case LOGIN_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        tokenUser: actions.payload,
        loading: false,
        isLoggedIn: true
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }


    case GET_CURRENT_USER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: actions.payload,
        isLoggedIn: true
      };
    }
    case GET_CURRENT_USER_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    
    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUser: null,
        tokenUser: null,
        isLoggedIn: false
      };
    }
    case LOGOUT_USER_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
