import {
  call,
  put,
  takeEvery,
  all,
  fork,
  delay,
  putResolve,
  takeLatest,
} from "redux-saga/effects";
import { getIngredients } from "../../utils/api-ingredients";
import {
  deleteCookie,
  getCookie,
  saveTokenToLocalStorage,
  setCookie,
} from "../../utils/cookie";
import { CONSTRUCTOR_RESET } from "../constructor-ingredients/constructor-actions";
import { editUser } from "../api";
import {
  EDIT_USER_REQUEST,
  onEditError,
  onEditSuccess,
} from "../edit-user/edit-actions";
import { fetchOrder } from "../api";
import { getUser } from "../api";
import {
  loadIngredientsError,
  loadIngredientsSuccess,
  showPageDetailSuccess,
  SHOW_PAGE_DETAIL_START,
} from "../ingredients/ingredients-actions";
import {
  LOAD_INGREDIENTS_START,
} from "../ingredients/ingredients-const";
import { loginUser } from "../api";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  GET_CURRENT_USER_START,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  onLoginError,
  onLoginSuccess,
  onLogoutSuccess,
} from "../login/login-actions";
import { logoutUser } from "../api";
import {
  LOAD_ORDER_START,
  onLoadingError,
  onLoadingSuccess,
} from "../order/order-actions";
import { registerUser } from "../api"
import {
  onRegisterError,
  onRegisterSuccess,
  REGISTER_USER_REQUEST,
} from "../register/register-actions";
import { passwordReset } from "../api";
import {
  onResetError,
  onResetSuccess,
  RESET_PASSWORD_REQUEST,
} from "../reset-password/reset-actions";
import { passwordRestore } from "../api";
import {
  onRestoreError,
  onRestoreSuccess,
  RESTORE_PASSWORD_REQUEST,
} from "../restore-password/restore-actions";
import { updateUser } from "../api";

function* onLoadIngredientsStart() {
  try {
    const response = yield call(getIngredients);
    // console.log(response)
    if (response) {
      yield delay(1000);
      yield put(loadIngredientsSuccess(response.data));
    }
  } catch (error) {
    yield put(loadIngredientsError(error.message));
  }
}

function* onLoadIngredients() {
  yield takeEvery(LOAD_INGREDIENTS_START, onLoadIngredientsStart);
}

//make order
function* onLoadOrderStart({ payload }) {
  try {
    console.log(payload)
    const response = yield call(fetchOrder, payload);
    console.log(response)
    if (response.success) {
      yield putResolve(onLoadingSuccess(response.order.number));
      yield put({ type: CONSTRUCTOR_RESET });
    }
  } catch (error) {
    yield put(onLoadingError(error.message));
  }
}

function* onLoadOrder() {
  yield takeEvery(LOAD_ORDER_START, onLoadOrderStart);
}

//Restore Password
function* goRestorePassword({ payload }) {
  try {
    const response = yield call(passwordRestore, payload);
    if (response.success) {
      yield put(onRestoreSuccess(response));
    }
  } catch (error) {
    yield put(onRestoreError(error.message));
  }
}

function* restorePassword() {
  yield takeEvery(RESTORE_PASSWORD_REQUEST, goRestorePassword);
}

//RESET PASSWORD
function* goResetPassword({ payload }) {
  try {
    const response = yield call(passwordReset, payload);
    if (response.success) {
      yield put(onResetSuccess(response));
    }
  } catch (error) {
    yield put(onResetError(error.message));
  }
}

function* ResetPassword() {
  yield takeEvery(RESET_PASSWORD_REQUEST, goResetPassword);
}

//REGISTER
function* goRegisterUser({ payload }) {
  // console.log(payload);
  try {
    const response = yield call(registerUser, payload);
    // console.log(response);
    if (response.success) {
      yield put(onRegisterSuccess(response));
    }
  } catch (error) {
    yield put(onRegisterError(error.message));
  }
}

function* registerUsers() {
  yield takeEvery(REGISTER_USER_REQUEST, goRegisterUser);
}

//LOGIN
function* goLoginUser({ payload }) {
  // console.log(payload);
  try {
    const response = yield call(loginUser, payload);

    if (response.success) {
      const { refreshToken, accessToken } = response;
      yield put(onLoginSuccess(response));
      yield call(saveTokenToLocalStorage, refreshToken);
      yield call(setCookie, "accessToken", accessToken);
    }
  } catch (error) {
    yield put(onLoginError(error.message));
  }
}

function* loginUsers() {
  yield takeEvery(LOGIN_USER_REQUEST, goLoginUser);
}

function* getUserStart() {
  // console.log(getCookie("accessToken"));
  const response = yield call(getUser);

  const token = {
    token: localStorage.getItem("refreshToken"),
  };

  if (response.message === "jwt expired") {
    const token = {
      token: localStorage.getItem("refreshToken"),
    };
    const updateToken = yield call(updateUser, token);
    const { accessToken, refreshToken } = updateToken;
    yield call(saveTokenToLocalStorage, refreshToken);
    yield call(setCookie, "accessToken", accessToken);
    const response = yield call(getUser);
    if (response.success) {
      yield put(getCurrentUserSuccess(response.user));
      console.log(response);
    }
  }

  if (response.success) {
    yield put(getCurrentUserSuccess(response.user));
    console.log(response);
  } else if (
    localStorage.getItem("refreshToken") &&
    !getCookie("accessToken")
  ) {
    const updateToken = yield call(updateUser, token);
    const { accessToken, refreshToken } = updateToken;
    yield call(saveTokenToLocalStorage, refreshToken);
    yield call(setCookie, "accessToken", accessToken);
    const response = yield call(getUser);
    console.log(response);
    if (response.success) {
      yield put(getCurrentUserSuccess(response.user));
    } else {
      yield put(getCurrentUserError(response.message));
    }
  } else if (!response.success) {
    yield put(getCurrentUserError(response.message));
  }

  
}

function* onGetUser() {
  yield takeLatest(GET_CURRENT_USER_START, getUserStart);
}

//LOGOUT
function* goLogoutUser() {
  const token = { token: localStorage.getItem("refreshToken") };
  try {
    const response = yield call(logoutUser, token);
    // console.log(response);
    if (response) {
      yield put(onLogoutSuccess());
      const refreshToken = localStorage.getItem("refreshToken");
      localStorage.removeItem("refreshToken", refreshToken);
      deleteCookie("accessToken");
    }
  } catch (error) {}
}

function* logoutUsers() {
  yield takeEvery(LOGOUT_USER_REQUEST, goLogoutUser);
}

//edit User
function* goEditUser({ payload }) {
  try {
    const response = yield call(editUser, payload);

    if (response.success) {
      yield put(onEditSuccess(response));
    }
  } catch (error) {
    yield put(onEditError(error.message));
  }
}

function* editUsers() {
  yield takeEvery(EDIT_USER_REQUEST, goEditUser);
}

function* goPageIngredient({ payload }) {
  try {
    const response = yield call(getIngredients);
    if (response) {
      yield delay(1000);
      yield put(loadIngredientsSuccess(response.data));

      // response.filter((data) => data.id === payload)
      const hook = response.data.filter((data) => data._id === payload);
      // console.log(hook);
      yield put(showPageDetailSuccess(hook));
    }
  } catch (error) {
    yield put(loadIngredientsError(error.message));
  }
}

function* getPageIngredient() {
  yield takeEvery(SHOW_PAGE_DETAIL_START, goPageIngredient);
}

export default function* rootSaga() {
  const burgerSagas = [
    fork(onLoadIngredients),
    fork(onLoadOrder),
    fork(restorePassword),
    fork(ResetPassword),
    fork(registerUsers),
    fork(loginUsers),
    fork(onGetUser),
    fork(logoutUsers),
    fork(editUsers),
    fork(getPageIngredient),
  ];
  yield all([...burgerSagas]);
}
