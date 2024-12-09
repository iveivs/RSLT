import { ACTION_TYPE } from "../actions";

const initialState = {
    questions: [],
    loading: false,
    error: null,
    currentQuestion: 0,
    correct
}
export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.START_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ACTION_TYPE.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: action.payload,
            }
        case ACTION_TYPE.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ACTION_TYPE.SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.payload,
            }
            
    
        default:
            return state
    }
}