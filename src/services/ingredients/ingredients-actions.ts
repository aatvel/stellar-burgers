import {
  LOAD_INGREDIENTS_START,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
} from "./ingredients-const";


export const SHOW_PAGE_DETAIL_START: 'SHOW_PAGE_DETAIL_START' = 'SHOW_PAGE_DETAIL_START'
export const SHOW_PAGE_DETAIL_SUCCESS: 'SHOW_PAGE_DETAIL_SUCCESS' = 'SHOW_PAGE_DETAIL_SUCCESS'


export interface IshowPageDetailStart {
  readonly type: typeof SHOW_PAGE_DETAIL_START;
  readonly payload: string | undefined

}

export interface IshowPageDetailSuccess {
  readonly type: typeof SHOW_PAGE_DETAIL_SUCCESS;
  readonly payload: any
}

export interface IloadIngredientsStart {
  readonly type: typeof LOAD_INGREDIENTS_START;
  readonly payload: undefined

}

export interface IloadIngredientsSuccess {
  readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
  readonly payload: any
}

export interface IloadIngredientsError {
  readonly type: typeof LOAD_INGREDIENTS_ERROR;
  readonly payload: any
}


export const showPageDetailStart = (item: string | undefined) => ({
    type: SHOW_PAGE_DETAIL_START,
    payload: item
})

export const showPageDetailSuccess = (ingredient: any) => ({
  type: SHOW_PAGE_DETAIL_SUCCESS,
  payload: ingredient
})


export const loadIngredientsStart = () => ({
  type: LOAD_INGREDIENTS_START,
});
export const loadIngredientsSuccess = (data: any) => ({
  type: LOAD_INGREDIENTS_SUCCESS,
  payload: data
});
export const loadIngredientsError = (error: any) => ({
  type: LOAD_INGREDIENTS_ERROR,
  payload: error
});

export type TIngredientsActions = IloadIngredientsError | IloadIngredientsSuccess | IloadIngredientsStart | IshowPageDetailSuccess |  IshowPageDetailStart


