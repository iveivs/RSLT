const createStore = (reducer) => {
    let state
    return {
        dispatch: (action) => {
            state= reducer(action)
        }, 
    }
}