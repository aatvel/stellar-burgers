import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  IUser
} from "./edit-actions";

import { TEditActions } from "./edit-actions";

type TEditUserState = {
  userInfo: IUser,
  loading: boolean,
  error: boolean,
}

export const initialState: TEditUserState = {
  userInfo: {},
  loading: false,
  error: false,
};

export const editReducer = (state = initialState, actions: TEditActions)=> {
  switch (actions.type) {
    case EDIT_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        userInfo: actions.payload,
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
