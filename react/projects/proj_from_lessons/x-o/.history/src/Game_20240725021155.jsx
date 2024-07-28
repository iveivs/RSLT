import { useState } from "react";
import { STATUS, PLAYER, PLAYER_SIGN } from "./constants";

import { GameLayout } from "./Game-layout";
function Game() {
    const [status, setStatus] = useState(STATUS.TURN);
    const [currentPlauyer, setCurrentPlauyer] = useState(PLAYER.CROSS);
    const [field, setField] = useState(
        new Array(9).fill(PLAYER.NOBODY)
    );

    const handleCellClick = (cellIndex) => {
      if(status === STATUS.WIN || field[cellIndex] !== PLAYER.NOBODY) {
        return
      }
      const newField = [...field]

      newField[cellIndex] = currentPlauyer 

      setField(newField)
      setCurrentPlauyer(currentPlauyer === PLAYER.CROSS ? PLAYER.NOUGHT)
    };

    return (
        <>
            <GameLayout
                status={status}
                currentPlauyer={currentPlauyer}
                field={field}
                handleCellClick={handleCellClick}
            />
        </>
    );
}

export default Game;
