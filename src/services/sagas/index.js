
import { call, put, takeEvery, all, fork, delay, putResolve, takeLatest } from "redux-saga/effects";
import { getIngredients } from "../../utils/api-ingredients";
import { getCookie, saveTokenToLocalStorage, setCookie } from "../../utils/cookie";
import { CONSTRUCTOR_RESET } from "../constructor-ingredients/constructor-actions";
import { fetchOrder } from "../fetch-order";
import { getUser } from "../get-user";
import { loadIngredientsError, loadIngredientsSuccess } from "../ingredients/ingredients-actions";
import { LOAD_INGREDIENTS_START, LOAD_INGREDIENTS_SUCCESS } from "../ingredients/ingredients-const";
import { loginUser } from "../login";
import { getCurrentUserSuccess, GET_CURRENT_USER_START, LOGIN_USER_REQUEST, onLoginError, onLoginSuccess } from "../login/login-actions";
import { LOAD_ORDER_START, onLoadingError, onLoadingSuccess } from "../order/order-actions";
import { registerUser } from "../register";
import { onRegisterError, onRegisterSuccess, REGISTER_USER_REQUEST } from "../register/register-actions";
import { passwordReset } from "../reset-password";
import { onResetError, onResetSuccess, RESET_PASSWORD_REQUEST } from "../reset-password/reset-actions";
import { passwordRestore } from "../restore-password";
import { onRestoreError, onRestoreSuccess, RESTORE_PASSWORD_REQUEST } from "../restore-password/restore-actions";

function* onLoadIngredientsStart() {
  try {
    const response = yield call(getIngredients);
    if (response){
        yield delay(1000)
        yield put(loadIngredientsSuccess(response))
    }
  } catch (error) {
    yield put(loadIngredientsError(error.message))
  }
}

function* onLoadIngredients() {
  yield takeEvery(LOAD_INGREDIENTS_START, onLoadIngredientsStart);
}


//make order
function* onLoadOrderStart({payload}){
    try {
        const response = yield call(fetchOrder, payload)
        if(response.success){
            yield putResolve(onLoadingSuccess(response.order.number))
            yield put({type: CONSTRUCTOR_RESET})
        }
    } catch (error) {
        yield put(onLoadingError(error.message))
    }
}

function* onLoadOrder() {
    yield takeEvery(LOAD_ORDER_START, onLoadOrderStart);
}


//Restore Password
function* goRestorePassword({payload}){
  try {
      const response = yield call(passwordRestore, payload)
      if(response.success){
          yield putResolve(onRestoreSuccess(response.message))
      }
  } catch (error) {
      yield put(onRestoreError(error.message))
  }
}

function* restorePassword() {
  yield takeEvery( RESTORE_PASSWORD_REQUEST, goRestorePassword)
}


//RESET PASSWORD
function* goResetPassword({payload}){
 try {
      const response = yield call(passwordReset, payload)
      if(response.success){
          yield putResolve(onResetSuccess(response.message))
      }
  } catch (error) {
      yield put(onResetError(error.message))
  }
}

function* ResetPassword() {
  yield takeEvery( RESET_PASSWORD_REQUEST, goResetPassword)
}


//REGISTER
function* goRegisterUser({payload}){
  console.log(payload)
  try {
      const response = yield call(registerUser, payload)
      console.log(response)
      if(response.success){
          yield putResolve(onRegisterSuccess(response.message))
      }
  } catch (error) {
      yield put(onRegisterError(error.message))
  }
}

function* registerUsers() {
  yield takeEvery( REGISTER_USER_REQUEST, goRegisterUser)
}

//LOGIN
function* gologinUser({payload}){
  console.log(payload)
  try {
      const response = yield call(loginUser, payload)
      
      
      if(response.success){
        const {refreshToken, accessToken} = response
          yield put(onLoginSuccess(response))
          yield call(saveTokenToLocalStorage, refreshToken)
          yield call(setCookie, 'accessToken', accessToken)
      }
  } catch (error) {
      yield put(onLoginError(error.message))
  }
}

function* loginUsers() {
  yield takeEvery( LOGIN_USER_REQUEST, gologinUser)
}

function* getUserStart(){
  console.log(getCookie('accessToken'))
  try {
    const response = yield call(getUser)
    console.log(response)
    if(response.success){
      yield put(getCurrentUserSuccess(response))
    }
  } catch (error) {
    
  }
}

function* ongetUser(){
  yield takeLatest(GET_CURRENT_USER_START, getUserStart)
}



export default function* rootSaga() {
  const burgerSagas = [
    fork(onLoadIngredients),
    fork(onLoadOrder),
    fork(restorePassword),
    fork(ResetPassword),
    fork(registerUsers),
    fork(loginUsers),
    fork(ongetUser)
  ];
  yield all([...burgerSagas]);
}
