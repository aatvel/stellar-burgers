const url = `https://norma.nomoreparties.space/api/ingredients`;

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = async () => {
  const res = await fetch("${url}/ingredients");
  const data = await checkResponse(res);
  if (data?.success)
    return data.data;
  return Promise.reject(data);
};
