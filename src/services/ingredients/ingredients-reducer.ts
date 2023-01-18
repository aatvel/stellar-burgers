
import { SHOW_PAGE_DETAIL_START, SHOW_PAGE_DETAIL_SUCCESS } from './ingredients-actions'
import {
    LOAD_INGREDIENTS_START,
    LOAD_INGREDIENTS_SUCCESS,
    LOAD_INGREDIENTS_ERROR
} from './ingredients-const'
import { TIngredientsActions } from './ingredients-actions'
import { TItem } from "../../utils/types"

type TIngredientsState = {
    data: Array<TItem> 
    pageIngredient: Array<TItem>
    loading: boolean
    error: boolean
}

const initialState: TIngredientsState = {
    data: [],
    pageIngredient: [],
    loading: true,
    error: false
}

export const ingredientsReducer = (state = initialState, actions: TIngredientsActions) => {
    switch (actions.type) {
        case LOAD_INGREDIENTS_START: {
          return{ ...state, loading: true}  
        }
        case LOAD_INGREDIENTS_SUCCESS: {
            return {
                ...state, data: actions.payload, loading: false
            }
        }
        case LOAD_INGREDIENTS_ERROR: {
            return {
                ...state, error: actions.payload
            }
        }
        case SHOW_PAGE_DETAIL_SUCCESS: {
            return{
                ...state, pageIngredient: actions.payload
                
            }
        }
        
        default: {
            return state;
        }
    }
}