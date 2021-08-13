import "./App.css"
import React from 'react'

import Card from "./components/layout/Card"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from "./components/basicos/Aleatorio"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"

export default () => (
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card titulo="#04 - Componente com Filhos" color="#f63f70"> 
                <Familia sobrenome="Buarque">
                    <FamiliaMembro nome="Chico"/>
                    <FamiliaMembro nome="Cristina"/>
                    <FamiliaMembro nome="Alvaro"/>
                </Familia>
            </Card>
            <Card titulo="#03 - Desafio Aleatório" color="#d03b63"> 
                <Aleatorio min={10} max={20}/>
            </Card>
            <Card titulo="#02 - Com Parâmetro"  color="#9f2042"> 
                <ComParametro titulo="Iriri" subtitulo="Eh o robs"/> 
            </Card>
            <Card titulo="#01 - Primeiro Componente"  color="#7e1a35">
                <Primeiro /> 
            </Card>
        </div>
    </div>
);