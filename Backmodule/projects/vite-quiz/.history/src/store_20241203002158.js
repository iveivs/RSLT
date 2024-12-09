import { createStore,combineReducers, applyMiddleware, } from "redux";
import {thunk} from "redux-thunk";
import { quizReducer } from "./reducer/quizReducer";

const reducer = combineReducers({
    quiz: quizReducer,
})

export