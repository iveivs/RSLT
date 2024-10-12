const initialAppState = {
    wasLogout: 
}

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {  
        case ACTION_TYPE.LOGOUT:
            return {
                ...state,

            }
        default:
            return state;
    }
} 