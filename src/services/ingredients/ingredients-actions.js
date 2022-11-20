import {
  INGREDIENTS_LOADING,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_ERROR,
} from "./ingredients-const";

export const loadIngredientsStart = () => ({
  type: INGREDIENTS_LOADING,
});

export const loadIngredientsSuccess = (data) => ({
  type: INGREDIENTS_SUCCESS,
  payload: data,
});
export const loadingIngredientsError = () => ({
  type: INGREDIENTS_ERROR,
});

