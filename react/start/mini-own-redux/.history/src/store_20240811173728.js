const createStore = (reducer, initialState) => {
    let state
    return {
        dispatch: (action) => {
            state= reducer(action)
        }, 
    }
}