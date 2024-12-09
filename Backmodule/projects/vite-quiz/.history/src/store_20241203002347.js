import { createStore,combineReducers, applyMiddleware, } from "redux";
import {thunk} from "redux-thunk";
import { quizReducer } from "./reducer/quizReducer";

const reducer = combineReducers({
    quiz: quizReducer,
})

const composeEnhangers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhangers())