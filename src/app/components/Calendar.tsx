import React from 'react'
import { Pocket } from '../types/types'

type Props = {
    pockets: Pocket[]
}

export const Calendar =({pockets}: Props) => {

    const pocketComponents = pockets.map(pocket => (
        <div key={pocket.dayNum} className={pocket.available ? "available" : "unavailable"}>Pocket {pocket.dayNum}</div>
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
