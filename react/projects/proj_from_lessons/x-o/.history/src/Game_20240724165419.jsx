import { useState } from 'react'
import { STATUS, PLAYER } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlauyer, setCurrentPlauyer] = useState(PLAYER.CROSS)

  const field = new Array(9).fill(PLAYER_SIGN[PLAYER.CROSS])

  const handleCellClick = () =>{

  }

  return (
    <>
      <GameLayout status={status} currentPlauyer={currentPlauyer} />
    </>
  )
}

export default Game
