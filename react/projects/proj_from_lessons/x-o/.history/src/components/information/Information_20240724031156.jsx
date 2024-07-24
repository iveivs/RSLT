import { STATUS } from "../../constants"
import { InformationLayout } from "./Information-layout"

export const Information = ({status, currentPlauyer}) => {
    const infoMap = {
        [STATUS.TURN]: 'Ходит',
        [STATUS.WIN]: 'Победил'
    }
    const playerNameMap = {
        [PL]
    }
    const information = 'Ходит игрок'
    return <InformationLayout information={information} />
}