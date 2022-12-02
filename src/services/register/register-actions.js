export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";



export const onRegisterStart = (email) => ({
  type: REGISTER_USER_REQUEST,
  payload: email
})

export const onRegisterSuccess= (res) => ({
  type: REGISTER_USER_SUCCESS,
  payload: res
})

export const onRegisterError = (error) => ({
  type: REGISTER_USER_ERROR,
  payload: error
})