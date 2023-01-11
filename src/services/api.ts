//запросы, связанные с запросами на сервер
import { checkResponse } from "../utils/api-ingredients";
import { BURGER_API_URL } from "../utils/consts";
import { getCookie, setCookie } from "../utils/cookie";
import { request } from "../utils/api-ingredients";
import { IUser } from "./edit-user/edit-actions";
import { TUser } from "../utils/types";



export const fetchOrder = (data: any) => {
  return request(`${BURGER_API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
}



export const passwordRestore = (form: { email: string}) => {
  return request(`${BURGER_API_URL}/password-reset`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  })
}



export const passwordReset = (form: {password: string;
  token: string}) => {
  return request(`${BURGER_API_URL}/password-reset/reset`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  })
}



export const registerUser = (form: TUser) => {
  return request(`${BURGER_API_URL}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  })
}


export const loginUser = (form: TUser) => {
  return request(`${BURGER_API_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  })
}

// Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const logoutUserRequest = async (refreshToken: string) => {
  return await fetch(`${BURGER_API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(refreshToken),
  });
};

export const logoutUser = (refreshToken: any) => {
  return request(`${BURGER_API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(refreshToken),
  })
}


export const updateUser = (token: any) => {
  return request(`${BURGER_API_URL}/auth/token`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(token),
  })
}

// // Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const getUserRequest = async () => {
  const accToken: any =  getCookie("accessToken")
  return await fetch(`${BURGER_API_URL}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: accToken,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

export const getUser = async () => {
  return await getUserRequest()
  .then((res) => res.json())
}

// export const getUser = () => {
//   return  request(`${BURGER_API_URL}/auth/user`, {
//     method: "GET",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: getCookie("accessToken"),
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   })
// }




export const editUser = (form: IUser) => {
  const accToken: any =  getCookie("accessToken")
  return request(`${BURGER_API_URL}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: accToken,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form)
  })
}