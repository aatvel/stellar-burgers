import { v4 as uuid } from 'uuid';
import { TItem } from '../../utils/types';

export const SET_BUN: 'SET_BUN' = 'SET_BUN'
export const SET_MAINS_AND_SAUCES: 'SET_MAINS_AND_SAUCES' = 'SET_MAINS_AND_SAUCES'


export const CONSTRUCTOR_DELETE: 'CONSTRUCTOR_DELETE' = 'CONSTRUCTOR_DELETE'
export const CONSTRUCTOR_REORDER: 'CONSTRUCTOR_REORDER' = 'CONSTRUCTOR_REORDER'
export const CONSTRUCTOR_RESET: 'CONSTRUCTOR_RESET' = 'CONSTRUCTOR_RESET'

export interface ISetBunAction {
    readonly type: typeof SET_BUN;
    readonly payload: TItem
}

export interface IsetMainsAndSaucesAction {
    readonly type: typeof SET_MAINS_AND_SAUCES;
    readonly payload: TItem
}

export interface IConstructorDeleteAction {
    readonly type: typeof CONSTRUCTOR_DELETE;
    readonly payload: number
}

export interface IConstructorReorderAction {
    readonly type: typeof CONSTRUCTOR_REORDER;
    readonly payload: any
    readonly to: number;
    readonly from: number
}

export interface IConstructorResetAction {
    readonly type: typeof CONSTRUCTOR_RESET;
    readonly payload: TItem
}


export const setBun = (bun: TItem) => ({
    type: SET_BUN,
    payload: {...bun, id: uuid()}
})

export const setMainsAndSauces = (item: TItem) => {
    return {
    type: SET_MAINS_AND_SAUCES,
    payload: {...item, id: uuid()}
}}

export type TConstructorActions = ISetBunAction | IsetMainsAndSaucesAction | IConstructorDeleteAction | IConstructorResetAction | IConstructorReorderAction


