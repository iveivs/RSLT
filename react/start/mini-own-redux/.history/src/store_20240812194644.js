import { appReducer } from "./reducer"
const createStore = (reducer, initialState) => {
    let state = initialState
    return {
        dispatch: (action) => {
            state = reducer(action)
        }, 
        getState: () => state
    }
}

const store = createStore(re)