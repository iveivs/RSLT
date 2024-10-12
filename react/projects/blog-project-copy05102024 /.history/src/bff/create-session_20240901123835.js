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
    return {
        
        removeComment() {
            console.log('удаление комментария');
        }
    }
}