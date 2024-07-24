import { PLAYER, STATUS } from "../../constants"
import { InformationLayout } from "./Information-layout"

export const Information = ({status, currentPlauyer}) => {
    const infoMap = {
        [STATUS.TURN]: 'Ходит',
        [STATUS.WIN]: 'Победил'
    }
    const playerNameMap = {
        [PLAYER.CROSS]: 'крестик'
        [PLAYER.NOUGHT]: 'нолик'
    }
    const information = 'Ходит игрок'
    return <InformationLayout information={information} />
}