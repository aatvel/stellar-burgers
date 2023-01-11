import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,

} from "./edit-actions";
import { TEditActions } from "./edit-actions";

const initialState = {
  userInfo: {},
  loading: false,
  error: false,
};

export const editReducer = (state = initialState, { type, payload}: TEditActions) => {
  switch (type) {
    case EDIT_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        userInfo: payload,
        loading: false,
      };
    }
    case EDIT_USER_ERROR: {
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
