export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";


export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR";



export const GET_CURRENT_USER_START = 'GET_CURRENT_USER_START'
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS'
export const GET_CURRENT_USER_ERROR = 'GET_CURRENT_USER_ERROR'


export const onLogintart = (email) => ({
  type: LOGIN_USER_REQUEST,
  payload: email
})

export const onLoginSuccess= (res) => ({
  type: LOGIN_USER_SUCCESS,
  payload: res
})

export const onLoginError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error
})


export const onLogoutStart = (token) => ({
  type: LOGOUT_USER_REQUEST,
  payload: token
})

export const onLogoutSuccess= (res) => ({
  type: LOGOUT_USER_SUCCESS,
  payload: res
})

export const onLogoutError = (error) => ({
  type: LOGOUT_USER_ERROR,
  payload: error
})


export const getCurrentUserStart = () => ({
  type: GET_CURRENT_USER_START,
})

export const getCurrentUserSuccess= (user) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: user
})

export const getCurrentUserError = (error) => ({
  type: GET_CURRENT_USER_ERROR,
  payload: error
})

