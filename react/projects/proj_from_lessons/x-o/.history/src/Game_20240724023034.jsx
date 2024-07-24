import { useState } from 'react'
import { STATUS, PLAYER } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlauyer, setCurrentPlauyer] = useState(PLAYER.CROSS)


  return (
    <>
      <GameLayout status={status} currentPlauyer />
    </>
  )
}

export default Game
