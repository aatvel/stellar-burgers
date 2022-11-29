import {
  LOAD_INGREDIENTS_START,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
} from "./ingredients-const";
import { getIngredients } from "../../utils/api-ingredients";

export const loadIngredientsStart = () => ({
  type: LOAD_INGREDIENTS_START,
});
export const loadIngredientsSuccess = (data) => ({
  type: LOAD_INGREDIENTS_SUCCESS,
  payload: data
});
export const loadIngredientsError = (error) => ({
  type: LOAD_INGREDIENTS_ERROR,
  payload: error
});


