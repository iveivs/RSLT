import { useState } from 'react'
import { STATUS, P } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlauyer, setCurrentPlauyer] = useState()


  return (
    <>
      <GameLayout status={status} />
    </>
  )
}

export default Game
