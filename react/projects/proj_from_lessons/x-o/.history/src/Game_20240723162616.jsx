import { useState } from 'react'
import { STATUS } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlauyer, setCurrentPlauyer] = useState(STATUS.TURN)


  return (
    <>
      <GameLayout status={status} />
    </>
  )
}

export default Game
