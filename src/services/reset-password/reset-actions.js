export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";



export const onResetStart = (email) => ({
  type: RESET_PASSWORD_REQUEST,
  payload: email
})

export const onResetSuccess= (res) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: res
})

export const onResetError = (error) => ({
  type: RESET_PASSWORD_ERROR,
  payload: error
})