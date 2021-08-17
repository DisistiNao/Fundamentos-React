import "./App.css"
import React from 'react'

import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Familia from "./components/basicos/Familia"
import Aleatorio from "./components/basicos/Aleatorio"
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Card from "./components/layout/Card"

export default () => (
    <div className="app">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card titulo="#11 - Contador" color="#d03b63"> 
                <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="#10 - Componente Controlado - (Input)" color="#9f2042"> 
                <Input />
            </Card>
            <Card titulo="#09 - Comunicação Indireta" color="#7e1a35"> 
                <IndiretaPai />
            </Card>
            <Card titulo="#08 - Comunicação Direta" color="#9f2042"> 
                <DiretaPai />
            </Card>
            <Card titulo="#07 - Renderização Condicional" color="#d03b63"> 
                <ParOuImpar numero={20}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{email: 'fer@nando.com'}}/>
            </Card>
            <Card titulo="#06 - Repetição - Tabela Produtos" color="#f63f70"> 
                <TabelaProdutos />
            </Card>
            <Card titulo="#05 - Repetição - Lista Alunos" color="#ff85a6"> 
                <ListaAlunos />
            </Card>
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