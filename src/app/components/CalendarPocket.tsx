import { Pocket } from "../types/types";
import React from "react";
import { ImageHolder } from "./ImageHolder";
import { isNull } from "util";

type Props = {
    pocket: Pocket
}

const createImageHolderElement = (pocket :Pocket) => (
    <ImageHolder imageDataKey={pocket.dayNum} />
)

const createButtonElement = (pocket: Pocket) => (
    <button>Click me!</button>
)

export const CalendarPocket = ({pocket} :Props) => {

    const pocketContent = isNull(pocket.pokeId) ? createButtonElement(pocket) : createImageHolderElement(pocket)

    return (
        <div className={pocket.available ? "available" : "unavailable"}>
            {pocket.dayNum}
            {pocketContent}
        </div>
    )
}
