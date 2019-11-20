import { SagaIterator } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'
import * as actions from './actions'
import * as utils from '../helper/utils'
import Axios from 'axios'

function sendOpenPocketRequest(urlKey: string, dayNum: number, pokeId: number) {
    return Axios.post("http://localhost:3000/pockets/create", { key: urlKey, dayNum: dayNum, pokeId: pokeId })
}

export function* pocketOpenSaga(): SagaIterator {
    while(true) {
        const {dayNum, urlKey} = yield take(actions.REQUEST_OPEN_POCKET)
        const available = utils.isPastNthDayOfMonth(dayNum)
        const pokeId = Math.floor(Math.random() * 151) + 1
        let { data } = yield call(sendOpenPocketRequest, urlKey, dayNum, pokeId)
        yield put(actions.openPocket(urlKey, dayNum, pokeId))
    }
}
