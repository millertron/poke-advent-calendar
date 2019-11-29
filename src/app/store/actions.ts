export const REQUEST_OPEN_POCKET = 'REQUEST_OPEN_POCKET'
export const OPEN_POCKET = 'OPEN_POCKET'
export const DISPLAY_MODAL = 'DISPLAY_MODAL'
export const REQUEST_CLOSE_MODAL = "REQUEST_CLOSE_MODAL"
export const CLOSE_MODAL = 'CLOSE_MODAL'

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

export const closeModal = () => ({
    type: CLOSE_MODAL
})
