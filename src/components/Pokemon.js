import axios from 'axios'
import React, { Component } from 'react'
import './Pokemon.css'

export default class Pokemon extends Component {
    
    constructor() {
        super()
        this.state = {
            value: '',
            pokemon: {},
            error: false
        }
    }

    handleChange = (e) => {
        const { value } = e.target

        this.setState({
            value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {value} = this.state

        try {   // we are going to TRY to search with the user's input. If it all goes well, Great! We update our state.
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
            .then(response => response.data)
            
            this.setState({
                value: '',
                pokemon
            })
        } // But, we might get some sort of error if the input doesn't give us the proper response
        catch {
            this.setState({
                pokemon: '',
                value: '',
                error: true
            })
        }

    }

    displayPokemon = () => {
        const { pokemon, value, error } = this.state
        console.log(pokemon)

        if (pokemon.name) {     // It's not enough to declare 'if (pokemon !== null) { return something }'
            return (
                <div>
                    <h2>Name: {pokemon.name}</h2>
                    {/* {pokemon.name ? <h2>Name: {pokemon.name}</h2> : null} */}
                    <p>I am rendering because the pokemon state has a .name property, which I declared in the 'if' 
                    condition for this return statement</p>
                    <img style={{height: '200px', width: '200px'}}src={pokemon.sprites.front_default} alt="" />
                    <h3>ID {pokemon.id}</h3>
                </div>
            )
        }
        else if (error) {
            return <h2>Pokemon not found!</h2>
        }
    }

    render() {
        const { value, pokemon } = this.state

        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleChange} type="text" value={value} placeholder='Find Your Pokemon' />
                    <button type="submit">Submit</button>
                </form>
                {this.displayPokemon()}
            </div>
        )
    }
}
