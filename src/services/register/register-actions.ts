import { TUser, IRegister } from "../../utils/types";

export const REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST' = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS' = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR: 'REGISTER_USER_ERROR' = "REGISTER_USER_ERROR";

export interface IonRegisterStart {
  readonly type: typeof REGISTER_USER_REQUEST;
  readonly payload: TUser
}

export interface IonRegisterSuccess {
  readonly type: typeof REGISTER_USER_SUCCESS;
  readonly payload: IRegister
}

export interface IonRegisterError {
  readonly type: typeof REGISTER_USER_ERROR;
  readonly payload: string
}

export type IRegisterActions = IonRegisterStart | IonRegisterSuccess | IonRegisterError

export const onRegisterStart = (email:TUser): IonRegisterStart => ({
  type: REGISTER_USER_REQUEST,
  payload: email
})

export const onRegisterSuccess= (res: IRegister): IonRegisterSuccess => ({
  type: REGISTER_USER_SUCCESS,
  payload: res
})

export const onRegisterError = (error: string): IonRegisterError => ({
  type: REGISTER_USER_ERROR,
  payload: error
})