import { SagaIterator } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import * as actions from './actions'

export function* pocketOpenSaga(): SagaIterator {
    while(true) {
        const {dayNum, urlKey} = yield take(actions.REQUEST_OPEN_POCKET)
        yield put(actions.openPocket(urlKey, dayNum))
    }
}
