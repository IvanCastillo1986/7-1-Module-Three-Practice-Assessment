import axios from 'axios'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class Berries extends Component {
    
    constructor() {
        super()
        this.state = {
            berries: ''
        }
    }

    getBerries = async () => {
        const berries = await axios.get('https://pokeapi.co/api/v2/berry/')
        .then(response => response.data.results)
        console.log(berries)
        return <h2>Berries</h2>
    }

    render() {
        return (
            <div className='Berries'>
                <h1>Select a Type:</h1>
                <form action="">
                    {/* <Route render={this.getBerries} /> */}
                </form>
            </div>
        )
    }
}
