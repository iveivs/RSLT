import { ACTION_TYPE } from "./action-type"
export const loadSuccess = (questions) => {
    return {
        type: ACTION_TYPE.LOAD_SUCCESS,
        payload: q
    }
}