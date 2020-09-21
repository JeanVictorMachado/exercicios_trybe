import React from 'react';
import './css/pokedex.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="pokedex">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;