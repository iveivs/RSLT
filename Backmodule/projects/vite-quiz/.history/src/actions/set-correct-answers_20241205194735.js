import { ACTION_TYPE } from "./action-type"

export const setCurentAnswers = (isAnswercorrect) => {
    return {
        type: ACTION_TYPE.SET_CORRECT_ANSWERS,
        payload: index,
    }
}