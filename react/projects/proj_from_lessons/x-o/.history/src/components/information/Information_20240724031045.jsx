import { STATUS } from "../../constants"
import { InformationLayout } from "./Information-layout"

export const Information = ({status, currentPlauyer}) => {
    const infoMap = {
        [STATUS]
    }
    const information = 'Ходит игрок'
    return <InformationLayout information={information} />
}