export const RESTORE_PASSWORD_REQUEST = "RESTORE_PASSWORD_REQUEST";
export const RESTORE_PASSWORD_SUCCESS = "RESTORE_PASSWORD_SUCCESS";
export const RESTORE_PASSWORD_ERROR = "RESTORE_PASSWORD_ERROR";



export const onRestoreStart = (email) => ({
  type: RESTORE_PASSWORD_REQUEST,
  payload: email
})

export const onRestoreSuccess= (res) => ({
  type: RESTORE_PASSWORD_SUCCESS,
  payload: res
})

export const onRestoreError = (error) => ({
  type: RESTORE_PASSWORD_ERROR,
  payload: error
})