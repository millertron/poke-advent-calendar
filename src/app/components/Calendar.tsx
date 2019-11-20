import React from 'react'
import { Pocket } from '../types/types'
import { connect } from 'react-redux'
import { State } from '../server/defaultState'
import CalendarPocket from './CalendarPocket'

type Props = {
    pockets: Pocket[]
}

export const Calendar =({pockets}: Props) => {

    const pocketComponents = pockets.map(pocket => (
        <CalendarPocket urlKey={pocket.urlKey} key={pocket.dayNum} dayNum={pocket.dayNum} />
    ))

    return (
        <div>
            <div id="pocketContainer">
                {pocketComponents}
            </div>
        </div>
    )
}

const mapStateToProps = (state: State) :Props => ({ pockets: state.pockets })

export default connect(mapStateToProps)(Calendar)
