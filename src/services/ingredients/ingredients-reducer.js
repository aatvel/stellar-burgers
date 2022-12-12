
import { SHOW_PAGE_DETAIL_START, SHOW_PAGE_DETAIL_SUCCESS } from './ingredients-actions'
import {
    LOAD_INGREDIENTS_START,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_ERROR
} from './ingredients-const'



const initialState = {
    data: [],
    pageIngredient: [],
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
        case SHOW_PAGE_DETAIL_SUCCESS: {
            return{
                ...state, pageIngredient: payload
                // pageIngredient: state.data.filter((data) => data.id === payload)
            }
        }
        
        default: {
            return state;
        }
    }
}