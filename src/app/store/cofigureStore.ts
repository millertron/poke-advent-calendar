import { createStore, combineReducers } from 'redux'
import { defaultState } from '../server/defaultState'
import { Pocket } from '../types/types'

export const store = createStore(
    combineReducers({
        pockets(pockets:Pocket[] = defaultState.pockets, action) :Pocket[]{
            return pockets
        }
    })
)
