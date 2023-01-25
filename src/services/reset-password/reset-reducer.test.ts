import {
onResetStart,
onResetSuccess,
onResetError,
TResetActions
} from "./reset-actions";
import { resetReducer as reducer, initialState as state } from "./reset-reducer";

describe("resetReducer test", () => {

  test('Проверка начального состояния', () => {
    expect(reducer(undefined, {} as TResetActions)).toEqual(
        state
    );
  });

  it("reset user start", () => {
    expect(reducer(state, onResetStart({ password: 'string', token: 'string' }))).toEqual({
      ...state,
      loading: true
    });
  });

  it("reset user success", () => {
    const password = 'password'
    expect(reducer(state, onResetSuccess(password as any))).toEqual({
      ...state,
      loading: false,
      password: password
    });
  });

  it("reset error", () => {
    const err = 'abc123'
    expect(reducer(state, onResetError(err))).toEqual({
      ...state,
      error: true
    });
  });
});
