export const server = {
    async authorize(authLogin, authPassword) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login === authLogin)

        if(!user) {
            return {
                error:'Такой пользователь не найден',
                res: null
            }
        }

        if(authPassword !== user.password) {
            return {
                error:'Неверный пароль',
                res: null
            }
        }

        const session = {
            Logout() {
                Object.keys(session).f
            },
            removeComment() {
                console.log('удаление комментария');
            }
        }

        return {
            error: null,
            res: session
        }
    }

    
}