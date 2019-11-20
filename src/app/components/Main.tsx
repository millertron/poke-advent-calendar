import React from 'react'
import Calendar from './Calendar'
import { Provider } from 'react-redux'
import { store } from '../store/cofigureStore'

export const Main = () => (
    <Provider store={store}>
        <Calendar />
    </Provider>
)
