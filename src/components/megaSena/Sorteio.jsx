import React from "react";

export default (props) => {
    function ordemCrecente(lista) {
        lista.sort(function(a,b) {
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        })

        return lista
    }
    
    function sortear(numsSorteio, min, max) {
        var listaSorteio = []
        
        for(var i = 0; i < numsSorteio; i++) {
            var elLista = parseInt(Math.random() * (max - min)) + min

            var j = true
            while(j) {
                if(listaSorteio.find(e => e == elLista) != undefined) {
                    elLista++
                    if(elLista >= max)
                    elLista -= max
                }
                else{
                    j = false
                    listaSorteio.push(elLista)
                }
            }
        }

        listaSorteio = ordemCrecente(listaSorteio)

        return listaSorteio
    }

    return(
        <div>
            <button onClick={
                function(e) {
                    props.alterarLista(sortear(props.numsSorteio, props.min, props.max))
                }
            }>
                Sortear
            </button>
        </div>
    )
}