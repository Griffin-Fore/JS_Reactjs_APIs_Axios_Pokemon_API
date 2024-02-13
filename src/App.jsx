import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  // Create an empty array to store the pokemon
  const [ pokemon, setPokemon ] = useState([])

  // Create an api call that calls for the first 151 pokemon only using limit=151
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response=>{setPokemon(response.data.results)})
    .catch(error=> {console.log("There was an error: ", error)})
  }, []);
  // use the console to check the value of pokemon
  console.log(pokemon)

  return (
    <div>
      <h1>Pokemon API</h1>
      <ul>
        {/* Check to make sure there are pokemon,, filter out all with id above 151, 
        and map them into an unordered list */}
      {pokemon.length > 0 && pokemon.filter((poke, index) => index <= 151).map((poke, index)=>{
        return (<li key={index}>{poke.name}</li>)
      })}
      </ul>
    </div>
  )
}

export default App
