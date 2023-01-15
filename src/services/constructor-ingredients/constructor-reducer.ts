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


const initialState: TConstrucorState = {
    buns: null,
    mainsAndSauces: [],
}

export const constructorReducer = (state = initialState, actions: TConstructorActions) => {
    switch (actions.type) {
        case SET_BUN: {return {...state, buns: actions.buns} }
        case SET_MAINS_AND_SAUCES: {return {...state, mainsAndSauces: [ ...state.mainsAndSauces, actions.mainsAndSauces]} }
        case CONSTRUCTOR_DELETE: {
            return {
            ...state, 
            mainsAndSauces: [
                ...state.mainsAndSauces.slice(0, actions.index),
                ...state.mainsAndSauces.slice(actions.index + 1),
            ],
        };}
        case CONSTRUCTOR_REORDER: {
            const mainsAndSauces = [...state.mainsAndSauces];
            mainsAndSauces.splice(
                actions.mainsAndSauces.to,
                0,
                mainsAndSauces.splice(actions.mainsAndSauces.from, 1)[0]
            )
            return {...state, mainsAndSauces,}
        }
        case CONSTRUCTOR_RESET: { return initialState}

        default:{ return state}
    }
}