import React from "react"
import { defaultState } from "../server/defaultState";

type Props = {
    imageDataKey: number
}

function getSrc(pokeName:string) :string {
    const formattedName = pokeName.toLowerCase().replace("'",'');
    return "https://img.pokemondb.net/sprites/black-white/anim/normal/" + formattedName + ".gif"
}

function getAlt(pokeName:string) :string {
    return pokeName
}

export const ImageHolder = ({imageDataKey} :Props) => {
    const num:number = imageDataKey - 1
    const pokeName: string = defaultState.pokeDataList[num]
    return (
        <img src={getSrc(pokeName)} alt={getAlt(pokeName)} />
    )
}
