import "./App.css"
import React from 'react'

import Card from "./components/layout/Card"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from "./components/basicos/Aleatorio"

export default () => (
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card titulo="#03 - Desafio Aleatório" color="#cc3366"> 
                <Aleatorio min={10} max={20}/>
            </Card>
            <Card titulo="#02 - Com Parâmetro"  color="#cc6666"> 
                <ComParametro titulo="Iriri" subtitulo="Eh o robs"/> 
            </Card>
            <Card titulo="#01 - Primeiro Componente"  color="#cc9966">
                <Primeiro /> 
            </Card>
        </div>
    </div>
);