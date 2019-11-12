import React from 'react'
import { Pocket } from '../types/types'
import { CalendarPocket } from './CalendarPocket'

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
