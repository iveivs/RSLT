const createStore = (reducer, initialState) => {
    let state = in
    return {
        dispatch: (action) => {
            state= reducer(action)
        }, 
    }
}