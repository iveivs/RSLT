import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer"

const reducer = combineReducers({
    userState: user
})
export const store =  createStore(reducer)