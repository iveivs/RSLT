import { PLAYER_ACTION, P} from "../../constants"
import { InformationLayout } from "./Information-layout"

export const Information = ({status, currentPlauyer}) => {
    
    
    const information = 'Ходит игрок'
    return <InformationLayout information={information} />
}