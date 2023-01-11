import { TUser } from "../../utils/types";

export const LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST' = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS' = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR: 'LOGIN_USER_ERROR' = "LOGIN_USER_ERROR";


export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS: 'LOGOUT_USER_SUCCESS' = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_ERROR: 'LOGOUT_USER_ERROR' = "LOGOUT_USER_ERROR";



export const GET_CURRENT_USER_START: 'GET_CURRENT_USER_START' = 'GET_CURRENT_USER_START'
export const GET_CURRENT_USER_SUCCESS: 'GET_CURRENT_USER_SUCCESS' = 'GET_CURRENT_USER_SUCCESS'
export const GET_CURRENT_USER_ERROR: 'GET_CURRENT_USER_ERROR' = 'GET_CURRENT_USER_ERROR'

export interface IonLogintart {
  readonly type: typeof LOGIN_USER_REQUEST;
  readonly payload: TUser

}

export interface IonLoginSuccess {
  readonly type: typeof LOGIN_USER_SUCCESS;
  readonly payload: object
}

export interface IonLoginError {
  readonly type: typeof LOGIN_USER_ERROR;
  readonly payload: string
}


export const onLogintart = (email: TUser): IonLogintart  => ({
  type: LOGIN_USER_REQUEST,
  payload: email
})

export const onLoginSuccess= (res: object): IonLoginSuccess => ({
  type: LOGIN_USER_SUCCESS,
  payload: res
})

export const onLoginError = (error: string): IonLoginError => ({
  type: LOGIN_USER_ERROR,
  payload: error
})



export interface IonLogoutStart {
  readonly type: typeof LOGOUT_USER_REQUEST;
}

export interface IonLogoutSuccess {
  readonly type: typeof LOGOUT_USER_SUCCESS;
}

export interface IonLogoutError {
  readonly type: typeof LOGOUT_USER_ERROR;
  readonly payload: string
}


export const onLogoutStart = ():IonLogoutStart => ({
  type: LOGOUT_USER_REQUEST
})

export const onLogoutSuccess= ():IonLogoutSuccess => ({
  type: LOGOUT_USER_SUCCESS
})

export const onLogoutError = (error: string):IonLogoutError => ({
  type: LOGOUT_USER_ERROR,
  payload: error
})

export interface IgetCurrentUserStart {
  readonly type: typeof GET_CURRENT_USER_START;
}

export interface IgetCurrentUserSuccess{
  readonly type: typeof GET_CURRENT_USER_SUCCESS;
  readonly payload: TUser
}

export interface IgetCurrentUserError {
  readonly type: typeof GET_CURRENT_USER_ERROR;
  readonly payload: string
}


export const getCurrentUserStart = (): IgetCurrentUserStart => ({
  type: GET_CURRENT_USER_START,
})

export const getCurrentUserSuccess= (user: TUser): IgetCurrentUserSuccess => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: user
})

export const getCurrentUserError = (error: string): IgetCurrentUserError => ({
  type: GET_CURRENT_USER_ERROR,
  payload: error
})

export type TLoginActions = IgetCurrentUserError | IgetCurrentUserSuccess | IgetCurrentUserStart | IonLogoutStart | IonLogoutSuccess | IonLogoutError | IonLogintart | IonLoginSuccess | IonLoginError
