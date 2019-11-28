import { createStore, combineReducers, applyMiddleware } from 'redux'
import { defaultState } from '../server/defaultState'
import { Pocket, ModalData } from '../types/types'
import * as actions from "./actions"
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
            },
            modalData(modalData:ModalData = defaultState.modalData, action) :ModalData{
                switch(action.type){
                    case actions.DISPLAY_MODAL:
                        return { displayed: true, title: action.title, message: action.message, pokeId: action.pokeId }
                    case actions.CLOSE_MODAL:
                        return { displayed: false }
                    default:
                        return modalData
                }
            }
        }),
        applyMiddleware(createLogger({ collapsed: true }), sagaMiddleware)
    )

    sagaMiddleware.run(pocketOpenSaga)
    return store
}


