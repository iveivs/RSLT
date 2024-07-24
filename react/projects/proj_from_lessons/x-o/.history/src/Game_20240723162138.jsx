import { useState } from 'react'


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
