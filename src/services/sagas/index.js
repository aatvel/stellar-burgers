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
import { editUser } from "../edit-user";
import { EDIT_USER_REQUEST, onEditError, onEditStart } from "../edit-user/edit-actions";
import { fetchOrder } from "../fetch-order";
import { getUser } from "../get-user";
import {
  loadIngredientsError,
  loadIngredientsSuccess,
} from "../ingredients/ingredients-actions";
import {
  LOAD_INGREDIENTS_START,
  LOAD_INGREDIENTS_SUCCESS,
} from "../ingredients/ingredients-const";
import { loginUser } from "../login";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  GET_CURRENT_USER_START,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  onLoginError,
  onLoginSuccess,
  onLogoutError,
  onLogoutSuccess,
} from "../login/login-actions";
import { logoutUser } from "../logout";
import {
  LOAD_ORDER_START,
  onLoadingError,
  onLoadingSuccess,
} from "../order/order-actions";
import { registerUser } from "../register";
import {
  onRegisterError,
  onRegisterSuccess,
  REGISTER_USER_REQUEST,
} from "../register/register-actions";
import { passwordReset } from "../reset-password";
import {
  onResetError,
  onResetSuccess,
  RESET_PASSWORD_REQUEST,
} from "../reset-password/reset-actions";
import { passwordRestore } from "../restore-password";
import {
  onRestoreError,
  onRestoreSuccess,
  RESTORE_PASSWORD_REQUEST,
} from "../restore-password/restore-actions";
import { updateUser } from "../update-user";

function* onLoadIngredientsStart() {
  try {
    const response = yield call(getIngredients);
    if (response) {
      yield delay(1000);
      yield put(loadIngredientsSuccess(response));
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
    const response = yield call(fetchOrder, payload);
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
  console.log(payload);
  try {
    const response = yield call(registerUser, payload);
    console.log(response);
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
function* gologinUser({ payload }) {
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
  yield takeEvery(LOGIN_USER_REQUEST, gologinUser);
}



function* getUserStart() {
  // console.log(getCookie("accessToken"));
  const response = yield call(getUser);
  const token = {
    token: localStorage.getItem("refreshToken")
  };

  if (response.success) {
    yield put(getCurrentUserSuccess(response.user));
    console.log(response)
  } else if (
    localStorage.getItem("refreshToken") && !getCookie("accessToken")
  ){
    const updateToken = yield call(updateUser, token);
    const {accessToken, refreshToken} = updateToken;
    yield call(saveTokenToLocalStorage, refreshToken);
    yield call(setCookie, "accessToken", accessToken);
    const response = yield call(getUser);
    console.log(response)
    if (response.success){
      yield put(getCurrentUserSuccess(response.user))
    } else {
      yield put(getCurrentUserError(response.message))
    }
  } else if (!response.success){
    yield put(getCurrentUserError(response.message))
  }

  if(response.message === "jwt expired"){
    const token = {
      token: localStorage.getItem("refreshToken")
    };
    const updateToken = yield call(updateUser, token);
    const {accessToken, refreshToken} = updateToken;
    yield call(saveTokenToLocalStorage, refreshToken);
    yield call(setCookie, "accessToken", accessToken);
    const response = yield call(getUser);
    if(response.success){
      yield put(getCurrentUserSuccess(response.user))
      console.log(response)
    }

  }
}




function* ongetUser() {
  yield takeLatest(GET_CURRENT_USER_START, getUserStart);
}

//LOGOUT
function* gologoutUser() {
  const token = {token: localStorage.getItem('refreshToken')}
  try {
    const response = yield call(logoutUser, token);
    console.log(response);
    if (response) {
      yield put(onLogoutSuccess());
      // deleteCookie('refreshToken')
      deleteCookie('accessToken')
    }
  } catch (error) {}
}

function* logoutUsers() {
  yield takeEvery(LOGOUT_USER_REQUEST, gologoutUser);
}

//edit User
function* goEditUser({ payload }) {

  try {
    const response = yield call(editUser, payload);
    console.log(response);
    if (response.success) {
      yield put(onEditStart(response));
    }
  } catch (error) {
    yield put(onEditError(error.message));
  }
}

function* editUsers() {
  yield takeEvery(EDIT_USER_REQUEST, goEditUser);
}

export default function* rootSaga() {
  const burgerSagas = [
    fork(onLoadIngredients),
    fork(onLoadOrder),
    fork(restorePassword),
    fork(ResetPassword),
    fork(registerUsers),
    fork(loginUsers),
    fork(ongetUser),
    fork(logoutUsers),
    fork(editUsers)
  ];
  yield all([...burgerSagas]);
}
