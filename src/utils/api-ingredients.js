export const url = `https://norma.nomoreparties.space/api/ingredients`;

export const url_ = 'https://norma.nomoreparties.space/api';

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options)
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
}

export const getIngredients = () => {
  return request(url);
};

