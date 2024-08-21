import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer"

// const reducer =
export const store =  createStore(reducer)