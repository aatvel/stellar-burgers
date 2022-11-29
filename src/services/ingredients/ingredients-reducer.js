import {
    LOAD_INGREDIENTS_START,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_ERROR
} from './ingredients-const'



const initialState = {
    data: [],
    loading: true,
    error: false
}

export const ingredientsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_INGREDIENTS_START: {
          return{ ...state, loading: true}  
        }
        case LOAD_INGREDIENTS_SUCCESS: {
            return {
                ...state, data: payload, loading: false
            }
        }
        case LOAD_INGREDIENTS_ERROR: {
            return {
                ...state, error: payload
            }
        }
        default: {
            return state;
        }
    }
}