import { removeComment } from "./session"
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
        default
    }
    return session
    
}