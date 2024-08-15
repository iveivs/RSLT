import { appReducer } from "./reducer"

const createStore = ( reducer ) => {
    let state
    return {
        dispatch: (action) => {
            state = reducer(action)
        }, 
        getState: () => state
    }
}

const store = createStore( appReducer )

store.dispatch()