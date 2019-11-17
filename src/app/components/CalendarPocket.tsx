import { Pocket } from "../types/types";
import React from "react";
import { ImageHolder } from "./ImageHolder";
import { isNull } from "util";
import { State } from "../server/defaultState";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from '../store/actions'

type Props = {
    dayNum: number
    pocket?: Pocket
    openPocketFunction?: Function
}

const createImageHolderElement = (pocket :Pocket) => {
    return (
        <ImageHolder imageDataKey={pocket.pokeId || 0} />
    )
}

const createButtonElement = (pocket: Pocket, openPocketFunction: Function) => (
    <button onClick={() => openPocketFunction(pocket.dayNum)}>Click me!</button>
)

const blankPocket:Pocket = {dayNum: 0, pokeId: null}

const blankFunction:Function = (num:number) => { console.log("No function defined", num)}

export const CalendarPocket = ({pocket = blankPocket, openPocketFunction = blankFunction} :Props) => {

    const pocketContent = isNull(pocket.pokeId) ? createButtonElement(pocket, openPocketFunction) : createImageHolderElement(pocket)
    return (
        <div>
            {pocket.dayNum}
            {pocketContent}
        </div>
    )
}

const mapStateToFunction = (state:State, ownProps:Props) :Props => {
    let ownPocket = ownProps.pocket
    let storePocket = state.pockets.find(pocket => pocket.dayNum === ownProps.dayNum) || ownPocket
    return {
        pocket: storePocket,
        dayNum: ownProps.dayNum
    }
}

const mapDispatchToProps = (dispatch :Dispatch, ownProps:Props) => ({
    openPocketFunction: () => dispatch(actions.openPocket(ownProps.dayNum))
})

export default connect(mapStateToFunction, mapDispatchToProps)(CalendarPocket)
