import { BURGER_API_URL } from "./consts";

export const checkResponse = (res: Response) => {

  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

};

export function request(url: RequestInfo | URL | string, options?: RequestInit | undefined) {

  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options)
    .then(checkResponse)
    .then((data) => {
      // console.log(data)
      if (data?.success) return data;
      
      return Promise.reject(data);
    });
}



export const getIngredients = () => {
  return request(`${BURGER_API_URL}/ingredients`, );
};




