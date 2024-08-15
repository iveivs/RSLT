const createStore = () => {
    return {
        dispatch: (action) => {
            const newState = reducer(state)
        }, 
    }
}