
import { call, put, takeEvery, all, fork, delay, putResolve } from "redux-saga/effects";
import { getIngredients } from "../../utils/api-ingredients";
import { CONSTRUCTOR_RESET } from "../constructor-ingredients/constructor-actions";
import { fetchOrder } from "../fetch-order";
import { loadIngredientsError, loadIngredientsSuccess } from "../ingredients/ingredients-actions";
import { LOAD_INGREDIENTS_START, LOAD_INGREDIENTS_SUCCESS } from "../ingredients/ingredients-const";
import { LOAD_ORDER_START, onLoadingError, onLoadingSuccess } from "../order/order-actions";
import { passwordReset } from "../reset-password";
import { onResetError, onResetSuccess, RESET_PASSWORD_REQUEST } from "../reset-password/reset-actions";
import { passwordRestore } from "../restore-password";
import { onRestoreError, onRestoreSuccess, RESTORE_PASSWORD_REQUEST } from "../restore-password/restore-actions";

function* onLoadIngredientsStart() {
  try {
    const response = yield call(getIngredients);
    console.log(response);
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



function* onLoadOrderStart({payload}){
    console.log(payload)
    try {
        const response = yield call(fetchOrder, payload)
        console.log(response)
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



function* goRestorePassword({payload}){
  console.log(payload)
  try {
      const response = yield call(passwordRestore, payload)
      console.log(response)
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



function* goResetPassword({payload}){
  console.log(payload)
  try {
      const response = yield call(passwordReset, payload)
      console.log(response)
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


export default function* rootSaga() {
  const burgerSagas = [
    fork(onLoadIngredients),
    fork(onLoadOrder),
    fork(restorePassword),
    fork(ResetPassword)
  ];
  yield all([...burgerSagas]);
}
