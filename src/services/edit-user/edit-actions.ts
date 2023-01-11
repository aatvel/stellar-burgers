export const EDIT_USER_REQUEST: 'EDIT_USER_REQUEST' = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS' = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR: 'EDIT_USER_ERROR' = "EDIT_USER_ERROR";

export interface IonEditStart {
  readonly type: typeof EDIT_USER_REQUEST;
  readonly payload: { email: string; password: string; name: string; }
}

export interface IonEditSuccess {
  readonly type: typeof EDIT_USER_SUCCESS;
  readonly payload: any
}

export interface IonEditError {
  readonly type: typeof EDIT_USER_ERROR;
  readonly payload: any
}

export const onEditStart = (user: { email: string; password: string; name: string; }) => ({
  type: EDIT_USER_REQUEST,
  payload: user
})

export const onEditSuccess= (res: any) => ({
  type: EDIT_USER_SUCCESS,
  payload: res
})

export const onEditError = (error: any) => ({
  type: EDIT_USER_ERROR,
  payload: error
})

export type TEditActions = IonEditStart | IonEditSuccess| IonEditError
