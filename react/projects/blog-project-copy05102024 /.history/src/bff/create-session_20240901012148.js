export const createSession = (roleId) => {
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