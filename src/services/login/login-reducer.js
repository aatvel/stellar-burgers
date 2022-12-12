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

const initialState = {
  tokenUser: null,
  currentUser: null,
  loading: false,
  error: false,
  isLoggedIn: false
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        tokenUser: payload,
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
        currentUser: payload,
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
