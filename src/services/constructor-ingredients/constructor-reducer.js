import {
    SET_BUN,
    SET_MAINS_AND_SAUCES
} from './constructor-actions'


const initialState = {
    buns: null,
    mainsAndSauces: [],
}

export const constructorReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_BUN: {return {...state, buns: payload} }
        case SET_MAINS_AND_SAUCES: {return {...state, mainsAndSauces: [ ...state.mainsAndSauces, payload]} }

        default:{ return state}
    }
}