import { createStore, combineReducers } from 'redux'
import { defaultState } from '../server/defaultState'
import { Pocket } from '../types/types'
import * as actions from "./actions"

export const store = createStore(
    combineReducers({
        pockets(pockets:Pocket[] = defaultState.pockets, action) :Pocket[]{
            if (action.type === actions.OPEN_POCKET) {
                console.log("OPEN POCKET NOW FOR DAY:", action.dayNum)
            }
            return pockets
        }
    })
)
