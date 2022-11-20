import {
    SET_BUN,
    SET_MAINS_AND_SAUCES
} from './constructor-actions'


const initialState = {
    buns: null,
    mainsAndSauces: [],
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUN: {return {...state, buns: action.type} }
        case SET_MAINS_AND_SAUCES: {return {...state, mainsAndSauces: [ ...state.mainsAndSauces, {...action.type}]} }

        default:{ return state}
    }
}