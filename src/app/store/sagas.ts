import { SagaIterator } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import Axios from 'axios'
import { serverUrl } from '../helper/utils'
import {openPocketModalTitle, errorModalTitle, errorModalMessage} from '../components/Modal'

const sendOpenPocketRequest = (urlKey: string, dayNum: number) => {
    return Axios.post(`${serverUrl}/pockets/create`, { key: urlKey, dayNum: dayNum })
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
