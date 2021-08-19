import React, { useState } from 'react'

import Sorteio from './Sorteio';
import "./DisplaySorteio.css"

export default (props) => {
    const [lista, setLista] = useState([])
    
    function alterarLista(lista) {
        setLista(lista)
    }

    console.log(lista)

    return (
        <div className="display">
            <h3>Números sorteados:</h3>
            
            {/* TENHO QUE FORMATAR OS VALORES RECEBIDOS DA LISTA AQUI*/}
            <span>{lista[0]}</span>
            <span>{lista[1]}</span>
            <span>{lista[2]}</span>
            <span>{lista[3]}</span>
            <span>{lista[4]}</span>
            <span>{lista[5]}</span>
            <span>{lista[6]}</span>

            <Sorteio 
                numsSorteio={props.numsSorteio} 
                min={props.min} 
                max={props.max}
                alterarLista={alterarLista}
            />
                

            <div>
                
            </div>
        </div>
    )
}