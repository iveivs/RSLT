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
        case R: {
            session.removeComment = removeComment
            break;
        }
        default:
            //ничего не делать
    }
    return session
    
}