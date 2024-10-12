import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
import thunk from "redux-thunk";

const reducer = combineReducers({
    user: {},
    users: {},
    post: {},
    posts: {},
})

const composeEnhangers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhangers(applyMiddleware(thunk)) )