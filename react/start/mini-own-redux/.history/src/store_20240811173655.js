const createStore = () => {
    let state
    return {
        dispatch: (action) => {
            state= reducer(action)
        }, 
    }
}