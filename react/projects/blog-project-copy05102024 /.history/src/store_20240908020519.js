import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
import thunk from "redux-thunk";

const composeEnhangers = window.__REDUX_

export const store = createStore(reducer, )