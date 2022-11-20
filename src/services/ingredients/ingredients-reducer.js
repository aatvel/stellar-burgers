import {
    INGREDIENTS_LOADING,
    INGREDIENTS_SUCCESS,
    INGREDIENTS_ERROR
} from './ingredients-const'

const initialState = {
    data: [],
    loading: true,
    error: false
}

export const ingredientsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INGREDIENTS_LOADING: {
          return{ ...state, loading: true}  
        }
        case INGREDIENTS_SUCCESS: {
            return {
                ...state, data: payload.data, loading: false
            }
        }
        case INGREDIENTS_ERROR: {
            return {
                ...state, error: true
            }
        }
        default: {
            return state;
        }
    }
}