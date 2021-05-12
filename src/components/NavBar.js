import React, { Component } from 'react'
import './NavBar.css'
import { Route, Link} from'react-router-dom'
import Pokemon from './Pokemon'
import Locations from './Locations'
import Berries from './Berries'

export default class NavBar extends Component {

    render() {
        return (
            <nav className='NavBar'>
                <Link to='/pokemon' >Pokemon</Link>
                <Link to='/locations' >Locations</Link>
                <Link to='/berries' >Berries</Link>
            </nav>
        )
    }
}

// At the top of your app you should have the navigation bar
    // -It displays links to each primary route at the top of the page, in a row, with space-around.
    // -Includes a logo of your choosing (50px x 50px), displayed in the upper-left of the page. The logo
    //  and links should display on every page. The logo should link to the homepage.