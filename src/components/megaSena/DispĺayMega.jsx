import React from 'react'

export default (props) => {
    return (
        <div>
            <h2>Mega Sena</h2>
            <h3>Quantidade de numeros sorteados: {props.numsSorteio}</h3>
            <h3>Range: min({props.min}) - max({props.max})</h3>
        </div>
    )
}