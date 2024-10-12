const initialAppState = {

}

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {  
        case ACTION_TYPE.LOGOUT:
            return 
        default:
            return state;
    }
} 