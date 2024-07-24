import { useState } from 'react'
import { STATUS, PLAYER } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlauyer, setCurrentPlauyer] = useState(PLAYER.)


  return (
    <>
      <GameLayout status={status} />
    </>
  )
}

export default Game
