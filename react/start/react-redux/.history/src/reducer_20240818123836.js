export const initialState = {
    user: {
        name: 'Martin',
        age: 123,
    },
    products: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}