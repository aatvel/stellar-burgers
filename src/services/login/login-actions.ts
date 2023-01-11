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
  readonly payload: { email: string; password: string; }

}

export interface IonLoginSuccess {
  readonly type: typeof LOGIN_USER_SUCCESS;
  readonly payload: any
}

export interface IonLoginError {
  readonly type: typeof LOGIN_USER_ERROR;
  readonly payload: any
}




export const onLogintart = (email: { email: string; password: string; }) => ({
  type: LOGIN_USER_REQUEST,
  payload: email
})

export const onLoginSuccess= (res: any) => ({
  type: LOGIN_USER_SUCCESS,
  payload: res
})

export const onLoginError = (error: any) => ({
  type: LOGIN_USER_ERROR,
  payload: error
})

export interface IonLogoutStart {
  readonly type: typeof LOGOUT_USER_REQUEST;
  readonly payload: string

}

export interface IonLogoutSuccess {
  readonly type: typeof LOGOUT_USER_SUCCESS;
  readonly payload: undefined
}

export interface IonLogoutError {
  readonly type: typeof LOGOUT_USER_ERROR;
  readonly payload: any
}


export const onLogoutStart = (token: string ) => ({
  type: LOGOUT_USER_REQUEST,
  payload: token
})

export const onLogoutSuccess= () => ({
  type: LOGOUT_USER_SUCCESS,
  // payload: res
})

export const onLogoutError = (error: any) => ({
  type: LOGOUT_USER_ERROR,
  payload: error
})

export interface IgetCurrentUserStart {
  readonly type: typeof GET_CURRENT_USER_START;
  readonly payload: undefined

}

export interface IgetCurrentUserSuccess{
  readonly type: typeof GET_CURRENT_USER_SUCCESS;
  readonly payload: any
}

export interface IgetCurrentUserError {
  readonly type: typeof GET_CURRENT_USER_ERROR;
  readonly payload: any
}


export const getCurrentUserStart = () => ({
  type: GET_CURRENT_USER_START,
})

export const getCurrentUserSuccess= (user: any) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: user
})

export const getCurrentUserError = (error: any) => ({
  type: GET_CURRENT_USER_ERROR,
  payload: error
})

export type TLoginActions = IgetCurrentUserError | IgetCurrentUserSuccess | IgetCurrentUserStart | IonLogoutStart | IonLogoutSuccess | IonLogoutError | IonLogintart | IonLoginSuccess | IonLoginError
