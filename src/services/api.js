//запросы, связанные с запросами на сервер
import { checkResponse } from "../utils/api-ingredients";
import { BURGER_API_URL } from "../utils/consts";
import { getCookie, setCookie } from "../utils/cookie";

export const fetchOrderRequest = async (data) => {
  return await fetch(`${BURGER_API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// Отправляем данные формы на сервер для авторизации
export const passwordRestoreRequest = async (form) => {
  return await fetch(`${BURGER_API_URL}/password-reset`, {
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
  });
};

// Отправляем данные формы на сервер для авторизации
export const passwordResetRequest = async (form) => {
  return await fetch(`${BURGER_API_URL}/password-reset/reset`, {
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
  });
};

// Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const registerRequest = async (form) => {
  return await fetch(`${BURGER_API_URL}/auth/register`, {
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
  });
};

// Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const loginUserRequest = async (form) => {
  return await fetch(`${BURGER_API_URL}/auth/login`, {
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
  });
};

// Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const logoutUserRequest = async (refreshToken) => {
  return await fetch(`${BURGER_API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(refreshToken),
  });
};

// Отправляем данные формы на сервер для РЕФРЕША ТОКЕНА
export const updateUserRequest = async (token) => {
  return await fetch(`${BURGER_API_URL}/auth/token`, {
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
  });
};

// Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const getUserRequest = async () => {
  return await fetch(`${BURGER_API_URL}/auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: getCookie("accessToken"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

// Отправляем данные формы на сервер для РЕГИСТРАЦИИ
export const editUserRequest = async (form) => {
  return await fetch(`${BURGER_API_URL}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
      authorization: getCookie("accessToken"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form)
  });
};
