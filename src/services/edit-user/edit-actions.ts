import { IEditUser } from "../../utils/types";

export const EDIT_USER_REQUEST: 'EDIT_USER_REQUEST' = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS' = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR: 'EDIT_USER_ERROR' = "EDIT_USER_ERROR";

export interface IUser {
  email?: string;
  password?: string;
  name?: string
}

export interface IonEditStart {
  readonly type: typeof EDIT_USER_REQUEST;
  readonly payload: IUser
}

export interface IonEditSuccess {
  readonly type: typeof EDIT_USER_SUCCESS;
  readonly payload: IEditUser
}

export interface IonEditError {
  readonly type: typeof EDIT_USER_ERROR;
  readonly payload: string
}

export const onEditStart = (user: IUser): IonEditStart => ({
  type: EDIT_USER_REQUEST,
  payload: user
})

export const onEditSuccess= (res: IEditUser): IonEditSuccess => ({
  type: EDIT_USER_SUCCESS,
  payload: res
})

export const onEditError = (error: string): IonEditError => ({
  type: EDIT_USER_ERROR,
  payload: error
})

export type TEditActions = IonEditStart | IonEditSuccess| IonEditError
