import { ACTION_TYPE } from "./action-type"

export const setCurentQuestion = (index) => {
    return {
        type: ACTION_TYPE.SET_CORRECT_ANSWERS,
        payload: index,
    }
}