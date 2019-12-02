import React from 'react'
import { getPokeImgSrc } from '../helper/utils'

export const CompletionModalContent = () => {
    const img = (<img src={getPokeImgSrc("delibird")} alt="Merry Christmas!"/>)
    return (
        <div className="modalImageContent">
            <p>
                You have completed this advent calendar!<br/>
                The creator of this site (whom you know well)<br/>
                wishes you a very happy Christmas!
            </p>
            <div className="ib">{img}</div>
            <div className="ib mx-3">{img}</div>
            <div className="ib">{img}</div>
        </div>
       )
}
