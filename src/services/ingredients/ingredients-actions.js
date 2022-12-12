import {
  LOAD_INGREDIENTS_START,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
} from "./ingredients-const";
import { getIngredients } from "../../utils/api-ingredients";
import ingredient from "../../components/burger-ingredients/ingredient/ingredient";

export const SHOW_PAGE_DETAIL_START = 'SHOW_PAGE_DETAIL_START'
export const SHOW_PAGE_DETAIL_SUCCESS = 'SHOW_PAGE_DETAIL_SUCCESS'


export const showPageDetailStart = (item) => ({
    type: SHOW_PAGE_DETAIL_START,
    payload: item
})

export const showPageDetailSuccess = (ingredient) => ({
  type: SHOW_PAGE_DETAIL_SUCCESS,
  payload: ingredient
})


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


