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

    const calendarPocketComponents = (
        <div className="d-flex justify-content-center flex-wrap">
            {pockets.map(pocket => (<CalendarPocket urlKey={pocket.urlKey} key={pocket.dayNum} dayNum={pocket.dayNum} />))}
        </div>
    )

    return (
        <div style={calendarStyle}>
            {calendarPocketComponents}
            <div className="mt-5">
                <span className="pt-5 small">Pokémon images &amp; names © 1995-2019 Nintendo/Game Freak. Pokémon sprite links © Pokémon Database, 2008-2019.</span>
            </div>        
        </div>
    )
}

const mapStateToProps = (state: State) :Props => ({ pockets: state.pockets })

export default connect(mapStateToProps)(Calendar)
