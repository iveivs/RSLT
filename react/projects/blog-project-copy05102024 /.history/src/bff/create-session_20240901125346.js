import { removeComment } from "./session"
import { ROLE } from "../constants"
export const createSession = (roleId) => {
    const session = {
        logout() {
            Object.keys(session).forEach((key) => {
                delete session[key]
            })
        },
    }

    switch (roleId) {
        default:
            //ничего не делать
            case ROLE.ADMIN: {
                session.removeComment = removeComment
                break;
            }
    }
    return session
    
}