import {
  loadIngredientsError,
  loadIngredientsStart,
  loadIngredientsSuccess,
  showPageDetailSuccess,
} from "./ingredients-actions";
import {
  ingredientsReducer as reducer,
  initialState as state,
} from "./ingredients-reducer";
import { ingredients, pinkBun } from "../../utils/test-const";

describe("ingredientsReducer test", () => {

  it("load ingredients start", () => {
    expect(reducer(state, loadIngredientsStart())).toEqual({
      ...state,
      loading: true
    });
  });

  it("load ingredients", () => {
    expect(reducer(state, loadIngredientsSuccess(ingredients as any))).toEqual({
      ...state,
      loading: false,
      data: ingredients,
    });
  });

  it("load ingredients error", () => {
    const err = 'error'
    expect(reducer(state, loadIngredientsError(err))).toEqual({
      ...state,
      error: err
    });
  });

  it("show page ingredient", () => {
    expect(reducer(state, showPageDetailSuccess(pinkBun as any))).toEqual({
      ...state,
      pageIngredient: pinkBun,
    });
  });
});
