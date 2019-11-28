import React from 'react'
import { ModalData } from '../types/types'
import { getPokeName, getPokeImgSrc } from '../helper/utils'
import { State } from '../server/defaultState'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as actions from '../store/actions'

export const openPocketModalTitle = "You caught a Pokémon!"
export const errorModalTitle = "Oops...Error!"
export const errorModalMessage = "Error occurred during pocket opening. Please try again later or contact site admin."

type Props = {
    modalData: ModalData,
    closeModalFunction?: Function
}

const modalDisplayed = {
    display: "block"
}

const maskStyle = {
    width: "100vh",
    height: "100vh",
    background: "#999",
    opacity: "0.30",
    zIndex: 50
}

const composeContent = (message?: string, pokeId?: number) => {
    if (pokeId) {
        const pokeName = getPokeName(pokeId)
        const stringContent = `You got ${pokeName}!`
        const img = (<img src={getPokeImgSrc(pokeName)} alt={pokeName}/>)
        return (
            <div className="modalImageContent">
                <h3>{stringContent}</h3>
                <div>
                    {img}
                </div>
            </div>
        ) 
    } else {
        return (<span>{message}</span>)
    }
}

const defaultCloseModalFunction = () => {
    alert("No close modal function registered!")
}

export const Modal = ({ modalData, closeModalFunction = defaultCloseModalFunction } :Props) => {
    return modalData.displayed ? (
        <div id="appModal" className="modal" style={modalDisplayed}>
            <div className="modal-dialog">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h4 className="modal-title">{modalData.title}</h4>
                        <button type="button" className="close" onClick={()=>closeModalFunction()}>&times;</button>
                    </div>

                    <div className="modal-body">
                        {composeContent(modalData.message, modalData.pokeId)}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={()=>closeModalFunction()}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (<noscript/>)
}

const mapStateToProps = (state: State) :Props => ({ modalData: state.modalData })
const mapDispatchToProps = (dispatch :Dispatch) => ({
    closeModalFunction: () => dispatch(actions.closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
