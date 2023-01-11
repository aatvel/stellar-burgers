import { TItem } from "../../utils/types"

export const SHOW_DETAILS: 'SHOW_DETAILS' = 'SHOW_DETAILS'
export const CLOSE_DETAILS: 'CLOSE_DETAILS' = 'CLOSE_DETAILS'

export interface IshowDetails {
    readonly type: typeof SHOW_DETAILS;
    readonly payload: TItem

}

export interface IcloseDetails {
    readonly type: typeof CLOSE_DETAILS;
    readonly payload: null
}

export const showDetails = (item: TItem) => ({
    type: SHOW_DETAILS,
    payload: item
})

export const closeDetails = () => ({
    type: CLOSE_DETAILS
})

export type TDetailsActions = IshowDetails | IcloseDetails