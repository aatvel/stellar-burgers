export const REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST' = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS' = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR: 'REGISTER_USER_ERROR' = "REGISTER_USER_ERROR";

export interface IonRegisterStart {
  readonly type: typeof REGISTER_USER_REQUEST;
  readonly payload: { email: string; password: string; name: string; }
}

export interface IonRegisterSuccess {
  readonly type: typeof REGISTER_USER_SUCCESS;
  readonly payload: any
}

export interface IonRegisterError {
  readonly type: typeof REGISTER_USER_ERROR;
  readonly payload: any
}

export type IRegisterActions = IonRegisterStart | IonRegisterSuccess | IonRegisterError

export const onRegisterStart = (email: { email: string; password: string; name: string; }) => ({
  type: REGISTER_USER_REQUEST,
  payload: email
})

export const onRegisterSuccess= (res: any) => ({
  type: REGISTER_USER_SUCCESS,
  payload: res
})

export const onRegisterError = (error: any) => ({
  type: REGISTER_USER_ERROR,
  payload: error
})