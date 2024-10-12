export const createSession = (roleId) => {
    const session = {}

    sw
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