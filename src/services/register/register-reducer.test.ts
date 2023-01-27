import { user } from "../../utils/test-const";
import {
  onRegisterStart,
  onRegisterSuccess,
  onRegisterError,
  IRegisterActions,
} from "./register-actions";
import { registerReducer as reducer, initialState as state } from "./register-reducer";

describe("registerReducer test", () => {

  test('Проверка начального состояния', () => {
    expect(reducer(undefined, {} as IRegisterActions)).toEqual(
        state
    );
  });

  it("register user start", () => {
    expect(reducer(state, onRegisterStart(user))).toEqual({
      ...state,
      loading: true
    });
  });

  it("register user success", () => {
    expect(reducer(state, onRegisterSuccess(user as any))).toEqual({
      ...state,
      loading: false,
      user: user
    });
  });

  it("register order error", () => {
    const err = '123abc';
    expect(reducer(state, onRegisterError(err))).toEqual({
      ...state,
      error: true
    });
  });
});
