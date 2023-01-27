import {
  RESTORE_PASSWORD_REQUEST,
  RESTORE_PASSWORD_SUCCESS,
  RESTORE_PASSWORD_ERROR,
} from "./restore-actions";
import { TRestoreActions } from "./restore-actions";

type TRestoreState = {
  email: string | null,
  loading: boolean,
  error: boolean
}

export const initialState: TRestoreState = {
  email: null,
  loading: false,
  error: false
};

export const restoreReducer = (state = initialState, actions: TRestoreActions) => {
  switch (actions.type) {
    case RESTORE_PASSWORD_REQUEST: {
      return { ...state, loading: true };
    }
    case RESTORE_PASSWORD_SUCCESS: {
      return {
        ...state,
        email: actions.payload,
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
