import React from 'react'
import Calendar from './Calendar'
import { Provider } from 'react-redux'
import { store } from '../store/cofigureStore'
import { useParams } from 'react-router'
import axios from 'axios'
import { Pocket } from '../types/types'
import { defaultState } from '../server/defaultState'

export const Main = () => {
    const { urlKey } = useParams()
    const [thisStore, setStore] = React.useState(store())
    const [greeting, setGreeting] = React.useState("")

    React.useEffect(() => {
        if (defaultState.pockets.length === 0) {  
            axios.get(`http://localhost:3000/pockets/${urlKey}`)
                .then((response) => {
                    setGreeting(`Merry Christmas, ${response.data.user}`)

                    const pockets:Pocket[] = response.data.pockets
                    for (let i = pockets.length; i < 25; i++) {
                        pockets.push({ urlKey: urlKey || "", dayNum: (i + 1), pokeId: null })
                    }
                    defaultState.pockets = pockets
                    setStore(store())
                })
                .catch((error) => {
                    console.log(error.response.status)
                    console.log(error.response.message)
                })
        }
    })

    return (
        <Provider store={thisStore}>
            <h1>{greeting}</h1>
            <Calendar />
        </Provider>
    )
}
