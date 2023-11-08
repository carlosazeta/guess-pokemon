import { useReducer } from 'react'

export const GAME_ACTION_TYPES = {
  GUESS_CORRECT: 'GUESS_CORRECT',
  GUESS_INCORRECT: 'GUESS_INCORRECT',
  RESET_GAME: 'RESET_GAME'
}

const initialStateGame = {
  gameWon: false,
  gameOver: false,
  lives: 3
}

function gameReducer (state, action) {
  switch (action.type) {
    case GAME_ACTION_TYPES.GUESS_CORRECT:
      return { ...state, gameWon: true }

    case GAME_ACTION_TYPES.GUESS_INCORRECT: {
      const newLives = state.lives - 1
      const gameOver = newLives === 0
      return { ...state, gameOver, lives: newLives }
    }

    case GAME_ACTION_TYPES.RESET_GAME:
      return { ...initialStateGame }
    default:
      return state
  }
}

export function useGame () {
  const [state, dispatch] = useReducer(gameReducer, initialStateGame)

  function handleGuessCorrect () {
    dispatch({ type: GAME_ACTION_TYPES.GUESS_CORRECT })
  }

  function handleGuessIncorrect () {
    dispatch({ type: GAME_ACTION_TYPES.GUESS_INCORRECT })
  }

  function handleResetGame () {
    dispatch({ type: GAME_ACTION_TYPES.RESET_GAME })
  }

  return {
    state,
    handleGuessCorrect,
    handleGuessIncorrect,
    handleResetGame
  }
}
