import { user } from "../../utils/test-const";
import {
  onLogintart,
  onLoginSuccess,
  onLoginError,
  getCurrentUserStart,
  getCurrentUserSuccess,
  onLogoutSuccess,
  getCurrentUserError,
  onLogoutError,
  onLogoutStart,
  TLoginActions,
} from "./login-actions";
import {
  loginReducer as reducer,
  initialState as state,
} from "./login-reducer";



describe("loginReducer test", () => {

  test('Проверка начального состояния', () => {
    expect(reducer(undefined, {} as TLoginActions)).toEqual(
        state
    );
  });

  it("login start", () => {
    expect(reducer(state, onLogintart(user))).toEqual({
      ...state,
      loading: true,
    });
  });

  it("login success", () => {
    expect(reducer(state, onLoginSuccess(user))).toEqual({
      ...state,
      loading: false,
      tokenUser: user,
      isLoggedIn: true,
    });
  });

  it("login error", () => {
    expect(reducer(state, onLoginError(user.name))).toEqual({
      ...state,
      error: true,
      loading: false,
    });
  });

  it("get current user info", () => {
    expect(reducer(state, getCurrentUserStart())).toEqual({
      ...state,
      loading: true,
    });
  });

  it("get current user info success", () => {
    expect(reducer(state, getCurrentUserSuccess(user))).toEqual({
      ...state,
      loading: false,
      currentUser: user,
      isLoggedIn: true,
    });
  });

  it("get current user info error", () => {
    const err = 'error'
    expect(reducer(state, getCurrentUserError(err))).toEqual({
      ...state,
      error: true,
      loading: false
    });
  });

  it("logout rewuest", () => {
    expect(reducer(state, onLogoutStart())).toEqual({
      ...state,
      loading: true
    });
  });

  it("logout", () => {
    expect(reducer(state, onLogoutSuccess())).toEqual({
      ...state,
      loading: false,
      currentUser: null,
      tokenUser: null,
      isLoggedIn: false,
    });
  });

  it("logout error", () => {
    const err = 'error'
    expect(reducer(state, onLogoutError(err))).toEqual({
      ...state,
      error: true,
      loading: false,
    });
  });
});
