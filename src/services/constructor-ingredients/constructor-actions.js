export const SET_BUN = 'SET_BUN'
export const SET_MAINS_AND_SAUCES = 'SET_MAINS_AND_SAUCES'
export const SET_SAUCES = 'SET_SAUCES'

export const setBun = (bun) => ({
    type: SET_BUN,
    payload: bun
})

export const setMainsAndSauces = (item) => ({
    type: SET_MAINS_AND_SAUCES,
    payload: item
})

