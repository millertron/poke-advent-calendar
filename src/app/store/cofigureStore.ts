import { createStore, combineReducers, applyMiddleware } from 'redux'
import { defaultState } from '../server/defaultState'
import { Pocket } from '../types/types'
import * as actions from "./actions"
import { isNull } from 'util'
import { createLogger } from 'redux-logger'

function isPastNthDayOfMonth(n:number) :boolean {
    const monthToCheck = 11
    const yearToCheck = 2019
    const today: Date = new Date()

    return today.getFullYear() === yearToCheck 
        && (today.getMonth() + 1) === monthToCheck // +1 as getMonth() is zero-indexed 
        && n <= today.getDate()
}

export const store = () => {
    return createStore(
        combineReducers({
            pockets(pockets:Pocket[] = defaultState.pockets, action) :Pocket[]{
                if (action.type === actions.OPEN_POCKET) {
                    const pokeId = Math.floor(Math.random() * 151) + 1
                    const available = isPastNthDayOfMonth(action.dayNum)
                    return pockets.map((pocket) => {
                        if (pocket.dayNum === action.dayNum && available && isNull(pocket.pokeId)) {
                            return { urlKey: pocket.urlKey, dayNum: pocket.dayNum, pokeId: pokeId, available: true }
                        } else return pocket
                    })
                }
                return pockets
            }
        }),
        applyMiddleware(createLogger({ collapsed: true }))
    )
}
