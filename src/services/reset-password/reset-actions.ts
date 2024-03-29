import { IRestore } from "../../utils/types";

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = "RESET_PASSWORD_ERROR";

export interface IonResetStart {
  readonly type: typeof RESET_PASSWORD_REQUEST;
  readonly payload: { password: string; token: string; }
}

export interface IonResetSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly payload: IRestore
}

export interface IonResetError {
  readonly type: typeof RESET_PASSWORD_ERROR;
  readonly payload: string
}

export type TResetActions = IonResetStart | IonResetSuccess | IonResetError



export const onResetStart = (email: { password: string; token: string; }): IonResetStart => ({
  type: RESET_PASSWORD_REQUEST,
  payload: email
})

export const onResetSuccess= (res: IRestore):IonResetSuccess => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: res
})

export const onResetError = (error: string): IonResetError => ({
  type: RESET_PASSWORD_ERROR,
  payload: error
})