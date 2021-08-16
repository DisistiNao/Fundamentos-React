import React from "react"
import IndiretaFilho from "./IndiretaFilho"

export default (props) => {
    let nome = '?'
    let idade = 0
    let nerd = false

    function fornecerInformaçoes(nomeParametro, idadeParametro, nerdParametro) {
        nome = nomeParametro
        idade = idadeParametro
        nerd = nerdParametro

        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>
                <div>{nome}</div>
                <div>{idade}</div>
                <div>{nerd}</div>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformaçoes}/>
        </div>
    )
}