import React from 'react'
import { Pocket } from '../types/types'
import { connect } from 'react-redux'
import { State } from '../server/defaultState'
import CalendarPocket from './CalendarPocket'
import { useParams } from 'react-router'

type Props = {
    pockets: Pocket[]
}

export const Calendar =({pockets}: Props) => {

    // Can use url parameter: const { urlKey } = useParams(); 

    
    for (let i = pockets.length; i < 25; i++) {
        pockets.push({ dayNum: (i + 1), pokeId: null })
    }
    const pocketComponents = pockets.map(pocket => (
        <CalendarPocket key={pocket.dayNum} dayNum={pocket.dayNum} />
    ))

    return (
        <div>
            <div>
                <h2>Poke Calendar</h2>
            </div>
            <div id="pocketContainer">
                {pocketComponents}
            </div>
        </div>
    )
}

const mapStateToProps = (state: State) :Props => ({ pockets: state.pockets })

export default connect(mapStateToProps)(Calendar)
