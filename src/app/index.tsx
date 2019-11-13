import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './components/Calendar'
import { defaultState } from './server/defaultState'
import { Provider } from 'react-redux'
import { store } from './store/cofigureStore'

ReactDOM.render(
    <Provider store={store}>
        <Calendar />
    </Provider>
, document.getElementById("app"))
