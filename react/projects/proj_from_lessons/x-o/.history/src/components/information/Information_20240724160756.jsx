import { PLAYER_ACTION, PLAYER_NAME} from "../../constants"
import { InformationLayout } from "./Information-layout"

export const Information = ({status, currentPlauyer}) => {
    const playerAction = PLAYER_ACTION[]
    
    const information = 'Ходит игрок'
    return <InformationLayout information={information} />
}