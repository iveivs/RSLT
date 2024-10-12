const initialAppState = {
    wasLogout: false,
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