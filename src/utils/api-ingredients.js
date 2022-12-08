import { BURGER_API_URL } from "./consts";


// const url = `https://norma.nomoreparties.space/api/ingredients`;


export const checkResponse = (res) => {

  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

};

export function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options)
    .then(checkResponse)
    .then((data) => {
      console.log(data)
      if (data?.success) return data;
      
      return Promise.reject(data);
    });
}



export const getIngredients = () => {
  return request(`${BURGER_API_URL}/ingredients`);
};




