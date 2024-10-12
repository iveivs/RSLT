export const createSession = (roleId) => {
    {
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