export const REQUEST_FETCH_POCKETS = 'REQUEST_FETCH_POCKETS'
export const FETCH_POCKETS = 'FETCH_POCKET'
export const REQUEST_OPEN_POCKET = 'REQUEST_OPEN_POCKET'
export const OPEN_POCKET = 'OPEN_POCKET'

export const requestFetchPockets = (dayNum: number) => ({
    type: REQUEST_FETCH_POCKETS,
    dayNum
})

export const fetchPockets = (dayNum: number) => ({
    type: FETCH_POCKETS,
    dayNum
})

export const requestOpenPocket = (dayNum: number) => ({
    type: REQUEST_OPEN_POCKET,
    dayNum
})

export const openPocket = (dayNum: number) => ({
    type: OPEN_POCKET,
    dayNum
})
