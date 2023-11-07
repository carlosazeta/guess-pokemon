import { useState } from 'react'
import { Lives } from './Lives'

export function Pokemon ({ id, image, name, loadNewPokemon }) {
  const [unlockPokemon, setUnlockPokemon] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [lives, setLives] = useState(3)

  const handleGuessPokemon = () => {
    const cleanUserGuess = userGuess.trim().toLowerCase()
    const cleanPokemonName = name.trim().toLowerCase()

    if (userGuess === '') return

    setLives((prevLives) => {
      const newLives = prevLives - 1

      if (newLives === 0) {
        setUnlockPokemon(true)
      }

      return newLives
    })

    if (cleanUserGuess === cleanPokemonName) {
      setUnlockPokemon(true)
    }
  }

  // const handleKeyPress = (event) => {
  //   console.log(event.key)
  // }

  const handleResetGame = () => {
    setUnlockPokemon(false)
    setUserGuess('')
    loadNewPokemon()
    setLives(3)
  }

  return (
    <div className='nes-container is-rounded'>
      {unlockPokemon && <span className='nes-text is-success'>{name}</span>}
      <img
        className={unlockPokemon ? 'pokemon-revealed' : 'pokemon-shape'}
        id={id}
        src={image}
        alt={name}
      />
      <div className='nes-field'>
        <label htmlFor='name_field'>Guess here</label>
        <input
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          type='text'
          id='name_field'
          className='nes-input'
        />
      </div>
      <button
        onClick={handleGuessPokemon}
        type='button'
        className='nes-btn is-primary'
      >
        Guess
      </button>
      <button
        className='nes-btn'
        onClick={handleResetGame}
      >Play again
      </button>
      <Lives
        lives={lives}
      />
    </div>
  )
}
