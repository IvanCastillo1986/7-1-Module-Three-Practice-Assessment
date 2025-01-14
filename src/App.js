import React from 'react'
import "./App.css";
import Welcome from './components/Welcome'
import Berries from './components/Berries'
import Pokemon from './components/Pokemon'
import './NavBar.css'

import { Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <nav className='NavBar'>
        <Link to='/'><img src="https://img.icons8.com/color/48/000000/pokeball--v1.png" alt='pokeball' /></Link>
        <Link to='/pokemon' >Pokemon</Link>
        <Link to='/locations' >Locations</Link>
        <Link to='/berries' >Berries</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/berries' component={Berries} />
          <Route path='/pokemon' component={Pokemon} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
