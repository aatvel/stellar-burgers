import {
  LOAD_INGREDIENTS_START,
  LOAD_INGREDIENTS_SUCCESS,
  LOAD_INGREDIENTS_ERROR,
} from "./ingredients-const";
import { TItem } from '../../utils/types';

export const SHOW_PAGE_DETAIL_START: 'SHOW_PAGE_DETAIL_START' = 'SHOW_PAGE_DETAIL_START'
export const SHOW_PAGE_DETAIL_SUCCESS: 'SHOW_PAGE_DETAIL_SUCCESS' = 'SHOW_PAGE_DETAIL_SUCCESS'


export interface IshowPageDetailStart {
  readonly type: typeof SHOW_PAGE_DETAIL_START;
  readonly payload: string | undefined
}

export interface IshowPageDetailSuccess {
  readonly type: typeof SHOW_PAGE_DETAIL_SUCCESS;
  readonly payload: Array<Pick<TItem, "_id">>
}

export interface IloadIngredientsStart {
  readonly type: typeof LOAD_INGREDIENTS_START;
}

export interface IloadIngredientsSuccess {
  readonly type: typeof LOAD_INGREDIENTS_SUCCESS;
  readonly payload: TItem[]
}

export interface IloadIngredientsError {
  readonly type: typeof LOAD_INGREDIENTS_ERROR;
  readonly payload: string
}


export const showPageDetailStart = (item: string | undefined): IshowPageDetailStart => ({
    type: SHOW_PAGE_DETAIL_START,
    payload: item
})

export const showPageDetailSuccess = (ingredient: Array<Pick<TItem, "_id">>) :IshowPageDetailSuccess => ({
  type: SHOW_PAGE_DETAIL_SUCCESS,
  payload: ingredient
})


export const loadIngredientsStart = (): IloadIngredientsStart => ({
  type: LOAD_INGREDIENTS_START,
});

export const loadIngredientsSuccess = (data: TItem[]): IloadIngredientsSuccess => ({
  type: LOAD_INGREDIENTS_SUCCESS,
  payload: data
});

export const loadIngredientsError = (error: string): IloadIngredientsError => ({
  type: LOAD_INGREDIENTS_ERROR,
  payload: error
});

export type TIngredientsActions = IloadIngredientsError | IloadIngredientsSuccess | IloadIngredientsStart | IshowPageDetailSuccess |  IshowPageDetailStart


