import { SHOW_DETAILS, CLOSE_DETAILS } from "./details-actions"
import { TDetailsActions } from "./details-actions"
import { TItem } from "../../utils/types"

type TDetailsState = {
    ingredient: TItem | null;
    showModal: boolean
}

const initialState: TDetailsState = {
    ingredient: null,
    showModal: false
}

export const detailsReducer = (state = initialState, actions: TDetailsActions) => {
    switch (actions.type)
    {
        case SHOW_DETAILS:  {return {showModal: true, ingredient: actions.payload}}
        case CLOSE_DETAILS: {return {showModal: false, ingredient: null}}

        default: {return state}
    }
}