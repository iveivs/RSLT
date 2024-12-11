import { ACTION_TYPE } from "./action-type"

export const setCurentAnswers = (arr) => {
    return {
        type: ACTION_TYPE.SET_CORRECT_ANSWERS,
        payload: isAnswerCorrect,
    }
}