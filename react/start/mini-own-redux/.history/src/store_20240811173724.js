const createStore = (reducer, initial) => {
    let state
    return {
        dispatch: (action) => {
            state= reducer(action)
        }, 
    }
}