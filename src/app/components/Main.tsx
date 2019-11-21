import React from 'react'
import Calendar from './Calendar'
import { Provider } from 'react-redux'
import { store } from '../store/cofigureStore'
import { useParams } from 'react-router'
import axios from 'axios'
import { Pocket } from '../types/types'
import { defaultState } from '../server/defaultState'
import { navStyle } from './styles/styles'

export const Main = () => {
    const { urlKey } = useParams()
    const [thisStore, setStore] = React.useState(store())
    const [greeting, setGreeting] = React.useState("")

    React.useEffect(() => {
        
        if (defaultState.pockets.length === 0) {  
            axios.get(`http://localhost:3000/pockets/${urlKey}`)
                .then((response) => {
                    setGreeting(`Season's greetings, ${response.data.user}`)

                    const pockets:Pocket[] = response.data.pockets
                    for (let i = 0; i < 25; i++) {
                        const pocketOfDay = pockets.find((pocket) => pocket.dayNum === i+1)
                        if (!pocketOfDay) {
                            pockets.push({ urlKey: urlKey || "", dayNum: (i + 1), pokeId: null })
                        }
                    }
                    pockets.sort((p1, p2) => p1.dayNum - p2.dayNum)
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
            <nav style={navStyle} className="p-2">
                <h3 >{greeting}</h3>
            </nav>
            <Calendar />
        </Provider>
    )
}
