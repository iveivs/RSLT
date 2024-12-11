import { ACTION_TYPE } from "./action-type"

export const setCurentQuestion = (dataArr) => {
    return {
        type: ACTION_TYPE.SET_CURRENT_QUESTION,
        payload: index,
    }
}