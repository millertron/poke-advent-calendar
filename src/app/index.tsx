import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar } from './components/Calendar'
import { defaultState } from './server/defaultState'

ReactDOM.render(<Calendar pockets={defaultState.pockets} />, document.getElementById("app"))
