import { v4 as uuid } from 'uuid';
import { TItem } from '../../utils/types';

export const SET_BUN: 'SET_BUN' = 'SET_BUN'
export const SET_MAINS_AND_SAUCES: 'SET_MAINS_AND_SAUCES' = 'SET_MAINS_AND_SAUCES'


export const CONSTRUCTOR_DELETE: 'CONSTRUCTOR_DELETE' = 'CONSTRUCTOR_DELETE'
export const CONSTRUCTOR_REORDER: 'CONSTRUCTOR_REORDER' = 'CONSTRUCTOR_REORDER'
export const CONSTRUCTOR_RESET: 'CONSTRUCTOR_RESET' = 'CONSTRUCTOR_RESET'

interface IItemAndId extends TItem {
    id: string;
}

interface IItemAndIdTo { 
    from: number,
    to: number 
}

export interface ISetBunAction {
    readonly type: typeof SET_BUN;
    readonly buns: IItemAndId
}

export interface IsetMainsAndSaucesAction {
    readonly type: typeof SET_MAINS_AND_SAUCES;
    readonly mainsAndSauces: IItemAndId
}

export interface IConstructorDeleteAction {
    readonly type: typeof CONSTRUCTOR_DELETE;
    readonly index: number
}

export interface IConstructorReorderAction {
    readonly type: typeof CONSTRUCTOR_REORDER;
    readonly mainsAndSauces: IItemAndIdTo
}

export interface IConstructorResetAction {
    readonly type: typeof CONSTRUCTOR_RESET;
    readonly payload: null
}



export const id =  uuid()

export const setBun = (bun: TItem): ISetBunAction => ({
    type: SET_BUN,
    buns: {...bun, id: uuid()}
})

export const setBuns = (bun: TItem): ISetBunAction => ({
    type: SET_BUN,
    buns: {...bun, id: uuid()}
})

export const setMainsAndSauces = (mainsAndSauces: TItem): IsetMainsAndSaucesAction => {
    return {
    type: SET_MAINS_AND_SAUCES,
    mainsAndSauces: {...mainsAndSauces, id: uuid()}
}}

export const reoderItem = (mainsAndSauces: IItemAndIdTo ): IConstructorReorderAction => ({
    type: CONSTRUCTOR_REORDER,
    mainsAndSauces  
})

export const deleteItem = (index: number): IConstructorDeleteAction => ({
    type: CONSTRUCTOR_DELETE,
    index   
})

export const resetItem = (payload: null): IConstructorResetAction => ({
    type: CONSTRUCTOR_RESET,
    payload
})



export type TConstructorActions = ISetBunAction | IsetMainsAndSaucesAction | IConstructorDeleteAction | IConstructorResetAction | IConstructorReorderAction


