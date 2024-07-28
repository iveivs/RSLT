import { WIN_PATTERNS } from "../constants"
// export const checkWin = (fiels, currentPlauyer) => {
//     return WIN_PATTERNS.some((winPattern)=>{
//         return winPattern.every((cellPlayer) => cellPlayer === currentPlauyer)
//     })
// }

export const checkWin = (field, currentPlauyer) => 
    WIN_PATTERNS.some((winPattern)=>
    winPattern.every((cellIndex) => field[cellIndex] === currentPlauyer)
    )
