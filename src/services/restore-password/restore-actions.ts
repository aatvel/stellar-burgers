export const RESTORE_PASSWORD_REQUEST = "RESTORE_PASSWORD_REQUEST";
export const RESTORE_PASSWORD_SUCCESS = "RESTORE_PASSWORD_SUCCESS";
export const RESTORE_PASSWORD_ERROR = "RESTORE_PASSWORD_ERROR";

export interface IonRestoreStart {
  readonly type: typeof RESTORE_PASSWORD_REQUEST;
  readonly payload: { email: string; }
}

export interface IonRestoreSuccess {
  readonly type: typeof RESTORE_PASSWORD_SUCCESS;
  readonly payload: any
}

export interface IonRestoreError {
  readonly type: typeof RESTORE_PASSWORD_ERROR;
  readonly payload: any
}

export type TRestoreActions = IonRestoreStart | IonRestoreSuccess | IonRestoreError

export const onRestoreStart = (email: { email: string; }) => ({
  type: RESTORE_PASSWORD_REQUEST,
  payload: email
})

export const onRestoreSuccess= (res: any) => ({
  type: RESTORE_PASSWORD_SUCCESS,
  payload: res
})

export const onRestoreError = (error: any) => ({
  type: RESTORE_PASSWORD_ERROR,
  payload: error
})