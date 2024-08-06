import { useState } from 'react'
import { STATUS, PLAYER, PLAYER_SIGN } from './constants'

import { GameLayout } from './Game-layout'
function Game() {
  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlauyer, setCurrentPlauyer] = useState(PLAYER.CROSS)
  const [field, setField] = useState(new Array(9).fill(PLAYER_SIGN[PLAYER.NOBODY]))
  

  const handleCellClick = () =>{

  }

  return (
    <>
      <GameLayout  status={status} currentPlauyer={currentPlauyer} field={field} handleCellClick={/>
    </>
  )
}

export default Game