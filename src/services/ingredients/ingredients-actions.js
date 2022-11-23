import {
  INGREDIENTS_LOADING,
  INGREDIENTS_SUCCESS,
  INGREDIENTS_ERROR,
} from "./ingredients-const";
import { getIngredients } from "../../utils/api-ingredients";

export const loadIngredientsStart = () => ({
  type: INGREDIENTS_LOADING,
});

export const loadedIngredients = () => dispatch => {
    getIngredients()
      .then((data) => dispatch({type: INGREDIENTS_SUCCESS,
        payload: data}))
      .catch(() => dispatch({type: INGREDIENTS_ERROR})); 
}

