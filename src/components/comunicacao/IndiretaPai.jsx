import React, {useState} from "react"
import IndiretaFilho from "./IndiretaFilho"

export default (props) => {
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformaçoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

        // console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>
                <div>{nome}</div>
                <div>{idade}</div>
                <div>{nerd ? "Verdadeiro" : "Falso"}</div>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformaçoes}/>
        </div>
    )
}