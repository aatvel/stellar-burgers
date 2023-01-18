import { TItem } from "../../utils/types"

export const SHOW_DETAILS: 'SHOW_DETAILS' = 'SHOW_DETAILS'
export const CLOSE_DETAILS: 'CLOSE_DETAILS' = 'CLOSE_DETAILS'

export interface IShowDetails {
    readonly type: typeof SHOW_DETAILS
    readonly payload: TItem
  };

export const showDetails = (item: TItem): IShowDetails => ({
    type: SHOW_DETAILS,
    payload: item
})

export interface ICloseDetails {
    readonly type: typeof CLOSE_DETAILS
  
  };

export const closeDetails = (): ICloseDetails => ({
    type: CLOSE_DETAILS
})

export type TDetailsActions = IShowDetails | ICloseDetails;