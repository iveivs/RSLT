import { WIN_PATTERNS } from "../constants"
// export const checkWin = (fiels, currentPlauyer) => {
//     return WIN_PATTERNS.some((winPattern)=>{
//         return winPattern.every((cellPlayer) => cellPlayer === currentPlauyer)
//     })
// }

export const checkWin = (fiels, currentPlauyer) => 
    WIN_PATTERNS.some((winPattern)=>
    winPattern.every((cellIndex) => f === currentPlauyer)
    )
