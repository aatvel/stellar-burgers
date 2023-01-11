import {
  call,
  put,
  takeEvery,
  all,
  fork,
  delay,
  putResolve,
  takeLatest,
  take,
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
  IonEditStart,
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
  IonLogintart,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  onLoginError,
  onLoginSuccess,
  onLogoutSuccess,
} from "../login/login-actions";
import { logoutUser } from "../api";
import {
  IonLoadingStart,
  LOAD_ORDER_START,
  onLoadingError,
  onLoadingSuccess,
} from "../order/order-actions";
import { registerUser } from "../api"
import {
  IonRegisterStart,
  onRegisterError,
  onRegisterSuccess,
  REGISTER_USER_REQUEST,
} from "../register/register-actions";
import { passwordReset } from "../api";
import {
  IonResetStart,
  onResetError,
  onResetSuccess,
  RESET_PASSWORD_REQUEST,
} from "../reset-password/reset-actions";
import { passwordRestore } from "../api";
import {
  IonRestoreStart,
  onRestoreError,
  onRestoreSuccess,
  RESTORE_PASSWORD_REQUEST,
} from "../restore-password/restore-actions";
import { updateUser } from "../api";
import { IRegister, TItem } from "../../utils/types";
import { IShowDetails } from "../ingredient-details/details-actions";

interface IIngredients {
  data: TItem[]
}

function* onLoadIngredientsStart() {
  try {
    const response: IIngredients = yield call(getIngredients);
    // console.log(response)
    if (response) {
      yield delay(1000);
      yield put(loadIngredientsSuccess(response.data));
    }
  } catch (error: any) {
    yield put(loadIngredientsError(error.message));
  }
}


function* onLoadIngredients() {
  yield takeEvery(LOAD_INGREDIENTS_START, onLoadIngredientsStart);
}

//make order

export interface IOrder {
  success: string
  order: {
    number: number
  }
}

function* onLoadOrderStart(action: IonLoadingStart) {
  try {
    // console.log(payload)
    const response: IOrder = yield call(fetchOrder, action.payload);
    // console.log(response)
    if (response.success) {
      yield putResolve(onLoadingSuccess(response.order.number));
      yield put({ type: CONSTRUCTOR_RESET });
    }
  } catch (error: any) {
    yield put(onLoadingError(error.message));
  }
}

function* onLoadOrder() {
  yield takeEvery(LOAD_ORDER_START, onLoadOrderStart);
}

//Restore Password
interface IRestore {
  success: string
}

function* goRestorePassword(action: IonRestoreStart) {
  try {
    const response: IRestore = yield call(passwordRestore,  action.payload);
    if (response.success) {
      yield put(onRestoreSuccess(response));
    }
  } catch (error: any) {
    yield put(onRestoreError(error.message));
  }
}

function* restorePassword() {
  yield takeEvery(RESTORE_PASSWORD_REQUEST, goRestorePassword);
}

//RESET PASSWORD
interface IReset {
  success: string
}
function* goResetPassword(action: IonResetStart) {
  try {
    const response: IReset = yield call(passwordReset, action.payload);
    if (response.success) {
      yield put(onResetSuccess(response));
    }
  } catch (error: any) {
    yield put(onResetError(error.message));
  }
}

function* ResetPassword() {
  yield takeEvery(RESET_PASSWORD_REQUEST, goResetPassword);
}

//REGISTER

function* goRegisterUser(action: IonRegisterStart) {
  // console.log(payload);
  try {
    const response: IRegister = yield call(registerUser, action.payload);
    // console.log(response);
    if (response.success) {
      yield put(onRegisterSuccess(response));
    }
  } catch (error: any) {
    yield put(onRegisterError(error.message));
  }
}

function* registerUsers() {
  yield takeEvery(REGISTER_USER_REQUEST, goRegisterUser);
}

//LOGIN
export interface ILogin {
  success: string
  refreshToken: string
  accessToken: string
}

function* goLoginUser(action: IonLogintart) {
  // console.log(payload);
  try {
    const response: ILogin = yield call(loginUser, action.payload);

    if (response.success) {
      const { refreshToken, accessToken } = response;
      yield put(onLoginSuccess(response));
      yield call(saveTokenToLocalStorage, refreshToken);
      yield call(setCookie, "accessToken", accessToken);
      yield call(setCookie,'isLoggedIn', true)
    }
  } catch (error: any) {
    yield put(onLoginError(error.message));
  }
}

function* loginUsers() {
  yield takeEvery(LOGIN_USER_REQUEST, goLoginUser);
}

//Get user

interface IGetUser {
  success: string
  accessToken: string
  refreshToken: string
  message: string
}

function* getUserStart() {
  // console.log(getCookie("accessToken"));
  const response: IRegister = yield call(getUser);
  const token = {
    token: localStorage.getItem("refreshToken"),
  };

  if (response.success) {
    yield put(getCurrentUserSuccess(response.user));
    yield call(setCookie, "isLoggedIn", true);
  } else if (
    localStorage.getItem("refreshToken") &&
    !getCookie("accessToken")
  ) {
    const updateToken: IRegister = yield call(updateUser, token);
    const { accessToken, refreshToken } = updateToken;
    yield call(saveTokenToLocalStorage, refreshToken);
    yield call(setCookie, "accessToken", accessToken);
    const response: IRegister = yield call(getUser);
  
    if (response.success) {
      yield put(getCurrentUserSuccess(response.user));
    } else {
      yield put(getCurrentUserError(response.message));
   
    }
  } else if (!response.success) {
    yield put(getCurrentUserError(response.message));
  
  }

  if (response.message === "jwt expired") {
    const token = {
      token: localStorage.getItem("refreshToken"),
    };
    const updateToken: IGetUser = yield call(updateUser, token);
    const { accessToken, refreshToken } = updateToken;
    yield call(saveTokenToLocalStorage, refreshToken);
    yield call(setCookie, "accessToken", accessToken);
    const response: IRegister = yield call(getUser);
    if (response.success) {
      yield put(getCurrentUserSuccess(response.user));
      // console.log(response);
    }
  }
}

function* onGetUser() {
  yield takeLatest(GET_CURRENT_USER_START, getUserStart);
}

//LOGOUT
interface ILogout{
  refreshToken: string
}

function* goLogoutUser() {
  const token = { token: localStorage.getItem("refreshToken") };
  try {
    const response: IRestore = yield call(logoutUser, token);
    // console.log(response);
    if (response) {
      yield put(onLogoutSuccess());
      // const refreshToken = localStorage.getItem("refreshToken") ;
      localStorage.removeItem("refreshToken");
      yield call( deleteCookie, 'accessToken');
      yield call( deleteCookie, 'isLoggedIn');
     
  }} catch (error: any) {}
}

function* logoutUsers() {
  yield takeEvery(LOGOUT_USER_REQUEST, goLogoutUser);
}

//edit User
interface IEdit {
  success: string
}
function* goEditUser(action: IonEditStart) {
  try {
    const response: IEdit = yield call(editUser, action.payload);

    if (response.success) {
      yield put(onEditSuccess(response));
    }
  } catch (error: any) {
    yield put(onEditError(error.message));
  }
}

function* editUsers() {
  yield takeEvery(EDIT_USER_REQUEST, goEditUser);
}

//Page Ingredient
function* goPageIngredient(action: IShowDetails) {
  try {
    const response: IIngredients = yield call(getIngredients);
    if (response) {
      yield delay(1000);
      yield put(loadIngredientsSuccess(response.data));

      const hook = response.data.filter((data: any) => data._id === action.payload);
      // console.log(hook);
      yield put(showPageDetailSuccess(hook));
    }
  } catch (error: any) {
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
