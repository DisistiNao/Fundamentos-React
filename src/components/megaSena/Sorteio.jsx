import React from "react";

export default (props) => {
    function ordemCrecente(lista) {
        lista.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })

        return lista
    }

    function gerarNumAleatorio(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min

        return array.includes(aleatorio) ?
            gerarNumAleatorio(min, max, array) :
            aleatorio
    }

    function sortear(numsSorteio, min, max) {
        var listaSorteio = []

        for (var i = 0; i < numsSorteio; i++)
            listaSorteio.push(gerarNumAleatorio(min, max, listaSorteio))

        listaSorteio = ordemCrecente(listaSorteio)

        return listaSorteio
    }

    return (
        <div>
            <button onClick={
                function (e) {
                    props.alterarLista(sortear(props.numsSorteio, props.min, props.max))
                }
            }>
                Sortear
            </button>
        </div>
    )
}