import React from 'react'
import { Pocket } from '../types/types'
import { connect } from 'react-redux'
import { State } from '../server/defaultState'
import CalendarPocket from './CalendarPocket'
import { calendarStyle } from './styles/styles'
//@ts-ignore
import Snow from 'react-snow-effect'

type Props = {
    pockets: Pocket[]
}

export const Calendar =({pockets}: Props) => {

    const currentYear = new Date().getFullYear()

    const calendarPocketComponents = (
        <div className="d-flex justify-content-center flex-wrap">
            {pockets.map(pocket => (<CalendarPocket urlKey={pocket.urlKey} key={pocket.dayNum} dayNum={pocket.dayNum} />))}
        </div>
    )

    return (
        <div style={calendarStyle}>
            <Snow />
            {calendarPocketComponents}
            <div className="mt-5">
                <span className="pt-5 small">
                    Powered by Millertronic Systems™. <br/>
                    Pokémon images &amp; names © Nintendo/Game Freak 1995-{currentYear}. <br/>
                    Pokémon sprite links © Pokémon Database, 2008-{currentYear}.
                </span>
            </div>        
        </div>
    )
}

const mapStateToProps = (state: State) :Props => ({ pockets: state.pockets })

export default connect(mapStateToProps)(Calendar)
