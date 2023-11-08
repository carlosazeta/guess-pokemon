import { Lives } from './Lives'
import { useGame } from '../hooks/useGame'
import { useState } from 'react'

export function Pokemon ({ id, image, name, loadNewPokemon }) {
  const {
    state,
    handleGuessCorrect,
    handleGuessIncorrect,
    handleResetGame
  } = useGame()

  const [userInput, setUserInput] = useState('')

  const nameToUpperCase = name.toUpperCase()

  const handleGuessPokemon = () => {
    const cleanUserGuess = userInput.trim().toLowerCase()
    const cleanPokemonName = name.trim().toLowerCase()

    if (state.gameOver || state.gameWon) return

    if (cleanUserGuess === '') return

    if (cleanUserGuess === cleanPokemonName) {
      handleGuessCorrect()
    } else {
      handleGuessIncorrect()
    }
  }

  const handleReset = () => {
    handleResetGame()
    setUserInput('')
    loadNewPokemon()
  }

  return (
    <div className='nes-container is-rounded'>
      {state.gameWon && <span className='nes-text is-success'>{nameToUpperCase}</span>}
      {state.gameOver &&
        <span className='nes-text is-error'>
          The pokemon was {nameToUpperCase}
        </span>}
      <img
        className={(state.gameOver || state.gameWon) ? 'pokemon-revealed' : 'pokemon-shape'}
        id={id}
        src={image}
        alt={name}
      />
      <div className='nes-field'>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type='text'
          id='name_field'
          className='nes-input'
        />
      </div>
      <button
        className='nes-btn'
        onClick={handleReset}
        type='button'
      >Play again
      </button>
      <button
        onClick={handleGuessPokemon}
        type='button'
        className={state.gameOver || state.gameWon ? 'nes-btn is-primary is-disabled' : 'nes-btn is-primary'}
        disabled={state.gameOver || state.gameWon}
      >
        Guess
      </button>
      <Lives
        lives={state.lives}
      />
    </div>
  )
}
