import React, { Component } from 'react'

import DispĺayMega from "./DispĺayMega"
import DisplaySorteio from './DisplaySorteio'

export default class MegaSena extends Component {
    state = {
        quantNums: this.props.quantNums || 7,
        minSorteio: this.props.minSorteio || 1,
        maxSorteio: this.props.maxSorteio || 60,
    }

    render() {
        return (
            <div>
                <DispĺayMega 
                    numsSorteio={this.state.quantNums} 
                    min={this.state.minSorteio} 
                    max={this.state.maxSorteio}
                />
                <DisplaySorteio 
                    numsSorteio={this.state.quantNums} 
                    min={this.state.minSorteio} 
                    max={this.state.maxSorteio}
                />
            </div>
        )
    }
}