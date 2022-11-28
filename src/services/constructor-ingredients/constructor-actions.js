import { v4 as uuid} from 'uuid';
import ingredient from '../../components/burger-ingredients/ingredient/ingredient';

export const SET_BUN = 'SET_BUN'
export const SET_MAINS_AND_SAUCES = 'SET_MAINS_AND_SAUCES'
export const SET_SAUCES = 'SET_SAUCES'

export const CONSTRUCTOR_DELETE = 'CONSTRUCTOR_DELETE'
export const CONSTRUCTOR_REORDER = 'CONSTRUCTOR_REORDER'
export const CONSTRUCTOR_RESET = 'CONSTRUCTOR_RESET'

export const setBun = (bun) => ({
    type: SET_BUN,
    payload: {...bun, id: uuid()}
})

export const setMainsAndSauces = (item) => {
    return {
    type: SET_MAINS_AND_SAUCES,
    payload: {...item, id: uuid()}
}}



