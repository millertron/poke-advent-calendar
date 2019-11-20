import { createStore, combineReducers, applyMiddleware } from 'redux'
import { defaultState } from '../server/defaultState'
import { Pocket } from '../types/types'
import * as actions from "./actions"
import { isNull } from 'util'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { pocketOpenSaga } from './sagas'
import * as utils from '../helper/utils'

export const store = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        combineReducers({
            pockets(pockets:Pocket[] = defaultState.pockets, action) :Pocket[]{
                if (action.type === actions.OPEN_POCKET) {
                    const pokeId = Math.floor(Math.random() * 151) + 1
                    const available = utils.isPastNthDayOfMonth(action.dayNum)
                    return pockets.map((pocket) => {
                        if (pocket.dayNum === action.dayNum && available && isNull(pocket.pokeId)) {
                            return { urlKey: pocket.urlKey, dayNum: pocket.dayNum, pokeId: pokeId, available: true }
                        } else return pocket
                    })
                }
                return pockets
            }
        }),
        applyMiddleware(createLogger({ collapsed: true }), sagaMiddleware)
    )

    sagaMiddleware.run(pocketOpenSaga)
    return store
}


