import { ROLE } from "../constants";
const initialUserState = {
    session: null,
    id: null,
    login: null,
    roleId: ROLE.GUEST,
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case  'SET_USER': {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
} 