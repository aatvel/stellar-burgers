import {
    SET_BUN,
    SET_MAINS_AND_SAUCES,
    CONSTRUCTOR_DELETE,
    CONSTRUCTOR_REORDER,
    CONSTRUCTOR_RESET
} from './constructor-actions'


const initialState = {
    buns: null,
    mainsAndSauces: [],
}

export const constructorReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_BUN: {return {...state, buns: payload} }
        case SET_MAINS_AND_SAUCES: {return {...state, mainsAndSauces: [ ...state.mainsAndSauces, payload]} }
        case CONSTRUCTOR_DELETE: {
            return {
            ...state, 
            mainsAndSauces: [
                ...state.mainsAndSauces.slice(0, payload),
                ...state.mainsAndSauces.slice(payload + 1),
            ],
        };}
        case CONSTRUCTOR_REORDER: {
            const mainsAndSauces = [...state.mainsAndSauces];
            mainsAndSauces.splice(
                payload.to,
                0,
                mainsAndSauces.splice(payload.from, 1)[0]
            )
            return {...state, mainsAndSauces,}
        }
        case CONSTRUCTOR_RESET: { return initialState}

        default:{ return state}
    }
}