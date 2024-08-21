import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer"

const reducer = combineReducers({
    userState: userReducer,
    productsState: productRedu
})
export const store =  createStore(reducer)