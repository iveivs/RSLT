import { appReducer } from "./reducer"

const createStore = ( reducer ) => {
    let state
    return {
        dispatch: (action) => {
            state = reducer(state, action)
            console.log(object);
        }, 
        getState: () => state
    }
}

export const store = createStore( appReducer )

store.dispatch({})