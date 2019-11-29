import { Pocket } from "../types/types";
import React from "react";
import { ImageHolder } from "./ImageHolder";
import { isNull } from "util";
import { State } from "../server/defaultState";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from '../store/actions'
import * as utils from '../helper/utils'
import './styles/styles.scss'

type Props = {
    urlKey: String,
    dayNum: number
    pocket?: Pocket
    openPocketFunction?: Function
}

const blankPocket:Pocket = {urlKey: "", dayNum: 0, pokeId: null}
const blankFunction:Function = (num:number) => { console.log("No function defined", num)}

const createImageHolderElement = (pocket :Pocket) => {
    return (
        <ImageHolder imageDataKey={pocket.pokeId || 0} />
    )
}

const createButtonElement = (pocket: Pocket, openPocketFunction: Function) => {
    const disabled = !utils.isPastNthDayOfMonth(pocket.dayNum)
    return (
        <button className="btn btn-light h-100" disabled={disabled} onClick={() => openPocketFunction(pocket.dayNum)}>
            {pocket.dayNum}
        </button>
    )
}

export const CalendarPocket = ({pocket = blankPocket, openPocketFunction = blankFunction} :Props) => {

    const pocketContent = isNull(pocket.pokeId) ? createButtonElement(pocket, openPocketFunction) : createImageHolderElement(pocket)
    return (
        <div className="m-1">
            <div className="card pocket-card">
                {pocketContent}
            </div>
        </div>
    )
}

const mapStateToFunction = (state:State, ownProps:Props) :Props => {
    let ownPocket = ownProps.pocket
    let storePocket = state.pockets.find(pocket => pocket.dayNum === ownProps.dayNum) || ownPocket
    return {
        urlKey: ownProps.urlKey,
        pocket: storePocket,
        dayNum: ownProps.dayNum
    }
}

const mapDispatchToProps = (dispatch :Dispatch, ownProps:Props) => ({
    openPocketFunction: () => dispatch(actions.requestOpenPocket(ownProps.urlKey, ownProps.dayNum))
})

export default connect(mapStateToFunction, mapDispatchToProps)(CalendarPocket)
