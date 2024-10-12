import { removeComment } from "./session"
import { ROLE } from "../"
export const createSession = (roleId) => {
    const session = {
        logout() {
            Object.keys(session).forEach((key) => {
                delete session[key]
            })
        },
    }

    switch (roleId) {
        case 0: {
            session.removeComment = removeComment
            break;
        }
        default:
            //ничего не делать
    }
    return session
    
}