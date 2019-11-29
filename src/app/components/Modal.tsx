import React from 'react'
import { ModalData } from '../types/types'
import { getPokeName, getPokeImgSrc } from '../helper/utils'
import { State } from '../server/defaultState'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as actions from '../store/actions'
import './styles/styles.scss'

export const openPocketModalTitle = "You caught a Pokémon!"
export const errorModalTitle = "Oops...Error!"
export const errorModalMessage = "An error occurred during pocket opening. Please try again later or contact site admin."

type Props = {
    modalData: ModalData,
    closeModalFunction?: Function
}

const composeContent = (message?: string, pokeId?: number) => {
    if (pokeId) {
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
    } else {
        return (<span>{message}</span>)
    }
}

const defaultCloseModalFunction = () => {
    alert("No close modal function registered!")
}

export const Modal = ({ modalData, closeModalFunction = defaultCloseModalFunction } :Props) => {
    return modalData.displayed ? (
        <div>
        <div id="appModal" className="modal ib fade-in">
            <div className="modal-dialog">
                <div className="modal-content text-center">
                    <div className="modal-header bg-dark-green">
                        <h4 className="modal-title">{modalData.title}</h4>
                        <button type="button" className="close" onClick={()=>closeModalFunction(modalData.message)}>&times;</button>
                    </div>

                    <div className="modal-body bg-med-red">
                        {composeContent(modalData.message, modalData.pokeId)}
                    </div>

                    <div className="modal-footer bg-dark-green">
                        <button type="button" className="btn btn-danger" onClick={()=>closeModalFunction(modalData.message)}>OK</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="modalMask" className="mask ib" />
        </div>
    ) : (<noscript/>)
}

const mapStateToProps = (state: State) :Props => ({ modalData: state.modalData })

const mapDispatchToProps = (dispatch :Dispatch) => ({
    closeModalFunction: (message? :string) => dispatch(actions.closeModal(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
