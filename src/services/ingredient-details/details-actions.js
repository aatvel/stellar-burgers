export const SHOW_DETAILS = 'SHOW_DETAILS'
export const CLOSE_DETAILS = 'CLOSE_DETAILS'

export const showDetails = (item) => ({
    type: SHOW_DETAILS,
    payload: item
})

export const closeDetails = () => ({
    type: CLOSE_DETAILS
})
