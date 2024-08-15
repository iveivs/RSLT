const createStore = () => {
    let state
    return {
        dispatch: (action) => {
            const newState = reducer(action)
        }, 
    }
}