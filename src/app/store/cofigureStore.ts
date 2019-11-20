import { createStore, combineReducers, applyMiddleware } from 'redux'
import { defaultState } from '../server/defaultState'
import { Pocket } from '../types/types'
import * as actions from "./actions"
import { isNull } from 'util'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { pocketOpenSaga } from './sagas'

export const store = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        combineReducers({
            pockets(pockets:Pocket[] = defaultState.pockets, action) :Pocket[]{
                if (action.type === actions.OPEN_POCKET) {
                    return pockets.map((pocket) => {
                        if (pocket.dayNum === action.dayNum) {
                            return { urlKey: pocket.urlKey, dayNum: pocket.dayNum, pokeId: action.pokeId }
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


