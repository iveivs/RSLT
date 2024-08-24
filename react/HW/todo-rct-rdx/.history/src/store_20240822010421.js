import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { todo } from "./reducers";

const reducer = combineReducers({
    userState: userReducer,
    productsState: productReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =  createStore(reducer, composeEnhancers(applyMiddleware(thunk)))