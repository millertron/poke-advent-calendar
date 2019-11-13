import React from 'react'
import { Pocket } from '../types/types'
import { CalendarPocket } from './CalendarPocket'
import { connect } from 'react-redux'
import { State } from '../server/defaultState'

type Props = {
    pockets: Pocket[]
}

export const Calendar =({pockets}: Props) => {

    const pocketComponents = pockets.map(pocket => (
        <CalendarPocket key={pocket.dayNum} pocket={pocket} />
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

function mapStateToProps(state: State) :Props {
    return {
        pockets: state.pockets
    }
}

export default connect(mapStateToProps)(Calendar)
