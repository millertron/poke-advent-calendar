import { SagaIterator } from 'redux-saga'
import { take, call, put, select } from 'redux-saga/effects'
import * as actions from './actions'
import Axios from 'axios'
import { serverUrl } from '../helper/utils'
import {openPocketModalTitle, errorModalTitle, errorModalMessage} from '../components/Modal'
import { State } from '../server/defaultState'

const sendOpenPocketRequest = (urlKey: string, dayNum: number) => {
    return Axios.post(`${serverUrl}/pockets/create`, { key: urlKey, dayNum: dayNum })
}

const getOpenedPocketsCount = (state: State) => {
    const pockets = state.pockets;
    return pockets.filter((pocket) => pocket.pokeId).length
}

export function* pocketOpenSaga(): SagaIterator {
    while(true) {
        try {
            const {dayNum, urlKey} = yield take(actions.REQUEST_OPEN_POCKET)
            let { data } = yield call(sendOpenPocketRequest, urlKey, dayNum)
            yield put(actions.openPocket(data.urlKey, data.dayNum, data.pokeId))
            yield put({type: actions.DISPLAY_MODAL, title: openPocketModalTitle, pokeId: data.pokeId})
        } catch (error) {
            console.log("Error occurred during pocket opening!")
            yield put({type: actions.DISPLAY_MODAL, title: errorModalTitle, message: errorModalMessage})
        }
    }
}

export function* closeModalSaga(): SagaIterator {
    while(true) {
        const {message} = yield take(actions.CLOSE_MODAL)
        if ("complete" !== message && (yield select(getOpenedPocketsCount)) === 25) {
            console.log("All pockets opened!")
            yield put({type: actions.DISPLAY_MODAL, title: "Merry Christmas!", message: "complete"})
        }
    }
}
