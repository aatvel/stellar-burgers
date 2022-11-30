import {
  RESTORE_PASSWORD_REQUEST,
  RESTORE_PASSWORD_SUCCESS,
  RESTORE_PASSWORD_ERROR,
} from "./restore-actions";

const initialState = {
  email: null,
  loading: false,
  error: false
};

export const restoreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESTORE_PASSWORD_REQUEST: {
      return { ...state, loading: true };
    }
    case RESTORE_PASSWORD_SUCCESS: {
      return {
        ...state,
        email: payload,
        loading: false,
      };
    }
    case RESTORE_PASSWORD_ERROR: {
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
