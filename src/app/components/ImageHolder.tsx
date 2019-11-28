import React from "react"
import { getPokeImgSrc, getPokeName } from "../helper/utils";

type Props = {
    imageDataKey: number
}

function getAlt(pokeName:string) :string {
    return pokeName
}

export const ImageHolder = ({imageDataKey} :Props) => {
    const pokeName: string = getPokeName(imageDataKey)
    return (
        <div className="text-center">
            <div className="w-100 h-75 pt-3">
                <img src={getPokeImgSrc(pokeName)} alt={getAlt(pokeName)} />
            </div>
            <div>
                <span>{pokeName}</span>
            </div>
        </div>
    )
}
