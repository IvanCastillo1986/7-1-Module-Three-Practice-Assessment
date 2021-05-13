import axios from 'axios'
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


export default class Berries extends Component {
    
    constructor() {
        super()
        this.state = {
            berries: [],
            selectedValue: '',
            berry: {} // If we type berry.firmness, we are asking for the firmness of an empty object (which is undefined)
        }   // BUT if we type in berry.firmness.name, we are asking for the .name property of undefined (which is a TYPE ERROR)
    }       // This will break our page upon render. That's why we need a conditional in the render, so we only call this if 
            // there's a truthy value inside of berry.firmness! If berry.firmness is undefined, we render it null

    getBerries = async () => {  // This populates berries array when component loads
        const berries = await axios.get('https://pokeapi.co/api/v2/berry/')
        .then(response => response.data.results)

        this.setState({
            berries: berries
        })
    }
    componentDidMount () {
        this.getBerries()
    }
    handleChange = async (e) => {
        this.setState({
            selectedValue: e.target.value
        })
        const {selectedValue} = this.state
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/${e.target.value}`)

        this.setState({
            berry: data
        })
    }
    renderBerry = () => {
        const { berry, selectedValue } = this.state
        if (selectedValue !== '') {
            return (
                <div>
                    <h2>{berry.name}</h2>
                    <h2>{berry.firmness ? berry.firmness.name : null}</h2>
                </div>
            )
        }
    }
    
    render() {
        const { berries, berry, berryName, berryFirmness } = this.state
        const options = berries.map((berry, i) => {
            return <option key={berry.name} value={berry.name}>{berry.name}</option>
        })

        return (
            <div className='Berries'>
                <h1>Select a Type</h1>
                <select onChange={this.handleChange} >
                    <option></option>
                    {options}
                </select>
                {/* {this.renderBerry()} */}
                {/* I can use renderBerry above, or I could hardcode the h2 renders below */}
                <h2>{berry.item ? berry.item.name : null}</h2>
                <h2>{berry.firmness ? berry.firmness.name : null}</h2>
            </div>
        )
    }
}
