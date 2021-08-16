import React from "react"

export default (props) => {
    const gerarIdade = (min, max) => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar("João", gerarIdade(50, 70), gerarNerd())
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}