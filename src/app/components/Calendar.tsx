import React from 'react'
import { Pocket } from '../types/types'
import { connect } from 'react-redux'
import { State } from '../server/defaultState'
import CalendarPocket from './CalendarPocket'
import { calendarStyle } from './styles/styles'

type Props = {
    pockets: Pocket[]
}

export const Calendar =({pockets}: Props) => {

    let pocketGroups = []
    const pocketGroupSize = 3
    for (let i = 0; i < 25; i += pocketGroupSize) {
        let pocketGroup:Pocket[] = []
        for (let j = i; j < (i + pocketGroupSize); j++) {
            if (j < pockets.length) {
                pocketGroup.push(pockets[j])
            }
        }
        pocketGroups.push(pocketGroup)
    }

    const pocketComponents = pocketGroups.map((pocketGroup, index) => (
        <div className="row" key={index}>
            {pocketGroup.map(pocket => (<CalendarPocket urlKey={pocket.urlKey} key={pocket.dayNum} dayNum={pocket.dayNum} />))}
        </div>
    ))

    return (
        <div>
            <div style={calendarStyle}>
                {pocketComponents}
            </div>
        </div>
    )
}

const mapStateToProps = (state: State) :Props => ({ pockets: state.pockets })

export default connect(mapStateToProps)(Calendar)
