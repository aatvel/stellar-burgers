import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
} from "./login-actions";

const initialState = {
  tokenUser: null,
  currentUser: null,
  loading: false,
  error: false,
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
        loading: true
      };
    }
    case GET_CURRENT_USER_SUCCESS:{
      return {
        ...state,
        loading:false,
        currentUser: payload
      }
    }
    case GET_CURRENT_USER_ERROR: {
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
