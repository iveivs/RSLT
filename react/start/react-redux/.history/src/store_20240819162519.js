import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer"

const reducer = combineReducers({
    userState: userReducer,
    productsState: product
})
export const store =  createStore(reducer)