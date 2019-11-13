import { Pocket } from "../types/types";
import React from "react";
import { ImageHolder } from "./ImageHolder";
import { isNull } from "util";
import { State } from "../server/defaultState";
import { connect } from "react-redux";

type Props = {
    dayNum: Number
    pocket?: Pocket
}

const createImageHolderElement = (pocket :Pocket) => (
    <ImageHolder imageDataKey={pocket.dayNum} />
)

const createButtonElement = (pocket: Pocket) => (
    <button>Click me!</button>
)

const blankPocket:Pocket = {dayNum: 0, pokeId: null, available: false}

export const CalendarPocket = ({pocket = blankPocket} :Props) => {

    const pocketContent = isNull(pocket.pokeId) ? createButtonElement(pocket) : createImageHolderElement(pocket)
    return (
        <div className={pocket.available ? "available" : "unavailable"}>
            {pocket.dayNum}
            {pocketContent}
        </div>
    )
}

const mapStateToFunction = (state:State, ownProp:Props) :Props => {
    let ownPocket = ownProp.pocket
    let storePocket = state.pockets.find(pocket => pocket.dayNum === ownProp.dayNum) || ownPocket
    return {
        pocket: storePocket,
        dayNum: ownProp.dayNum
    }
}

export default connect(mapStateToFunction)(CalendarPocket)
