import {
    SET_BUN,
    SET_MAINS_AND_SAUCES,
    CONSTRUCTOR_DELETE,
    CONSTRUCTOR_REORDER,
    CONSTRUCTOR_RESET
} from './constructor-actions'
import { TItem } from '../../utils/types'
import type { TConstructorActions } from './constructor-actions'


type TConstrucorState = {
    buns: null | TItem;
    mainsAndSauces: ReadonlyArray<TItem>
}


export const initialState: TConstrucorState = {
    buns: null,
    mainsAndSauces: [],
}

export const constructorReducer = (state = initialState, action: TConstructorActions) => {
    switch (action.type) {
        case SET_BUN: {return {...state, buns: action.buns} }
        case SET_MAINS_AND_SAUCES: {return {...state, mainsAndSauces: [ ...state.mainsAndSauces, action.mainsAndSauces]} }
        case CONSTRUCTOR_DELETE: {
            return {
            ...state, 
            mainsAndSauces: [
                ...state.mainsAndSauces.slice(0, action.index),
                ...state.mainsAndSauces.slice(action.index + 1),
            ],
        };}
        case CONSTRUCTOR_REORDER: {
            const mainsAndSauces = [...state.mainsAndSauces];
            mainsAndSauces.splice(
                action.mainsAndSauces.to,
                0,
                mainsAndSauces.splice(action.mainsAndSauces.from, 1)[0]
            )
            return {...state, mainsAndSauces,}
        }
        case CONSTRUCTOR_RESET: { return initialState}

        default:{ return state}
    }
}