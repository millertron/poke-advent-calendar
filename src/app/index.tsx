import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './components/Main'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Route path="/adventcalendar/:urlKey" render={()=>(<Main />)} />
    </BrowserRouter>
, document.getElementById("app"))
