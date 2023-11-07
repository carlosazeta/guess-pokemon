import { useEffect, useState } from 'react'
import './App.css'
import pokemonList from './services/api'
import { Pokemon } from './components/Pokemon'

function App () {
  const [pokemon, setPokemon] = useState()

  const loadNewPokemon = () => {
    pokemonList.random().then((result) => {
      setPokemon(result)
    })
  }

  useEffect(() => {
    loadNewPokemon()
  }, [])

  return (
    <>
      <h1>Guess the Pokemon!</h1>

      {
        pokemon && (
          <Pokemon
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            loadNewPokemon={loadNewPokemon}
          />
        )
      }
    </>
  )
}

export default App
