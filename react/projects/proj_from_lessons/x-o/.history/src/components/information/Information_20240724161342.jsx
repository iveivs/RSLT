import { PLAYER_ACTION, PLAYER_NAME} from "../../constants"
import { InformationLayout } from "./Information-layout"

export const Information = ({status, currentPlauyer}) => {
    const playerAction = PLAYER_ACTION[status]
    const playerName = PLAYER_NAME[currentPlauyer]
    
    const information = `${playerAction}: `
    return <InformationLayout information={information} />
}