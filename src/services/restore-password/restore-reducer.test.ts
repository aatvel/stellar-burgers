import { user } from "../../utils/test-const";
import {
  onRestoreStart,
  onRestoreSuccess,
  onRestoreError
} from "./restore-actions";
import { restoreReducer as reducer, initialState as state } from "./restore-reducer";


describe("restoreReducer test", () => {

  it("restore user start", () => {
    expect(reducer(state, onRestoreStart(user.email as any))).toEqual({
      ...state,
      loading: true
    });
  });

  it("restore user success", () => {
    expect(reducer(state, onRestoreSuccess(user.email as any))).toEqual({
      ...state,
      loading: false,
      email: user.email
    });
  });

  it("restore error", () => {
    const err = 'abc123'
    expect(reducer(state, onRestoreError(err))).toEqual({
      ...state,
      error: true
    });
  });
});