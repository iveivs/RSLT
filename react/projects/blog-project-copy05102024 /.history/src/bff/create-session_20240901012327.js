export const createSession = (roleId) => {
    const session = {}

    switch (roleId) {
        case value:
            
            break;
    
        default:
            break;
    }
    return {
        Logout() {
            Object.keys(session).forEach((key) => {
                delete session[key]
            })
        },
        removeComment() {
            console.log('удаление комментария');
        }
    }
}