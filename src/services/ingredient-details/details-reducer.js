import { SHOW_DETAILS, CLOSE_DETAILS } from "./details-actions"

const initialState = {
    ingredient: {},
    showModal: false
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type)
    {
        case SHOW_DETAILS:  {return {showModal: true, ingredient: payload}}
        case CLOSE_DETAILS: {return {showModal: false, ingredient: null}}

        default: {return initialState}
    }
} 