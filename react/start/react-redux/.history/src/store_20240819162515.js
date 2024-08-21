import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer"

const reducer = combineReducers({
    userState: userReducer,
    productsState: pro
})
export const store =  createStore(reducer)