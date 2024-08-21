import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
// import { reducer } from "./reducer" этот редьюсер уже не нужен
import { productReducer, userReducer } from "./reducers";

const reducer = combineReducers({
    userState: userReducer,
    productsState: productReducer
})
export const store =  createStore(reducer, applyMiddleware(thunk))