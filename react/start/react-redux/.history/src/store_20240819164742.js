import { createStore, combineReducers } from "redux";
// import { reducer } from "./reducer" этот редьюсер уже не нужен
import { productReducer } from "./reducers";

const reducer = combineReducers({
    userState: userReducer,
    productsState: productRedusers
})
export const store =  createStore(reducer)