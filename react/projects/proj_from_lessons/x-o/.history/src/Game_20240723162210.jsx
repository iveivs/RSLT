import { useState } from 'react'
import { STATUS } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState()

  return (
    <>
      <GameLayout />
    </>
  )
}

export default Game
