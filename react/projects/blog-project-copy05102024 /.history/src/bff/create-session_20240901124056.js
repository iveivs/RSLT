import { removeComment } from "./session/remove-comment"
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
            session.removeComment
        }
            
            break;
    
        default:
            break;
    }
    
}