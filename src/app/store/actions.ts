export const REQUEST_FETCH_POCKETS = 'REQUEST_FETCH_POCKETS'
export const FETCH_POCKETS = 'FETCH_POCKET'
export const REQUEST_OPEN_POCKET = 'REQUEST_OPEN_POCKET'
export const OPEN_POCKET = 'OPEN_POCKET'

export const requestOpenPocket = (urlKey:String, dayNum: number) => ({
    type: REQUEST_OPEN_POCKET,
    urlKey,
    dayNum
})

export const openPocket = (urlKey:String, dayNum: number, pokeId: number) => ({
    type: OPEN_POCKET,
    urlKey,
    dayNum,
    pokeId
})
