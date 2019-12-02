import React from 'react'
import { getPokeName, getPokeImgSrc } from '../helper/utils'

type Props = {
    pokeId :number
}

export const PokeModalContent = ( {pokeId} :Props) => {
    const pokeName = getPokeName(pokeId)
        const stringContent = `You got ${pokeName}!`
        const img = (<img src={getPokeImgSrc(pokeName)} alt={pokeName}/>)
        return (
            <div className="modalImageContent transparent slide-from-right">
                <h3>{stringContent}</h3>
                <div>
                    {img}
                </div>
            </div>
        ) 
}
