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
import './styles/order.scss'

type Props = {
    urlKey: String,
    dayNum: number
    pocket?: Pocket
    openPocketFunction?: Function
}

/* Arrange in fixed order: 
2, 8, 24, 11, 13, 
20, 3, 17, 5, 1, 
21, 18, 25, 9, 16,
12, 6, 14, 22, 4,
15, 7, 19, 23, 10
*/
const order = [
    10, 1, 7, 20, 9,
    17, 21, 2, 14, 25,
    4, 16, 5, 18, 20,
    15, 8, 12, 23, 6,
    11, 19, 24, 3, 13
]

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
    const className = `m-1 order-${order[pocket.dayNum - 1]}`
    return (
        <div className={className}>
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
