import { ROLE } from "../constants";
const initialUserState = {
    session: null,
    id: null,
    login: null,
    roleId: ROLE.GUEST
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
} 