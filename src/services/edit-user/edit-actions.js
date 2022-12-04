export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_ERROR = "EDIT_USER_ERROR";



export const onEditStart = (user) => ({
  type: EDIT_USER_REQUEST,
  payload: user
})

export const onEditSuccess= (res) => ({
  type: EDIT_USER_SUCCESS,
  payload: res
})

export const onEditError = (error) => ({
  type: EDIT_USER_ERROR,
  payload: error
})

