// import { getQuestions } from "../utils/utils"
import { ACTION_TYPE } from "../actions";

const initialState = {
    questions: [],
    loading: false,
    error: null,
}
const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.START_LOADING:
            return {
                ...state,
            }
            break;
    
        default:
            break;
    }
}