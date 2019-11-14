import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './components/Calendar'
import { defaultState } from './server/defaultState'
import { Provider } from 'react-redux'
import { store } from './store/cofigureStore'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route path="/:urlKey" render={()=>(<Calendar />)} />
        </Provider>
    </BrowserRouter>
, document.getElementById("app"))
