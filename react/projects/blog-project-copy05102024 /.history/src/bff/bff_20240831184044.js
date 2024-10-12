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
                Object.keys(session).forEach((key) => {
                    delete session[key]
                })
            },
            removeComment() {
                console.log('удаление комментария');
            }
        }

        return {
            error: null,
            res: session
        }
    },

    async register(regLogin, regPassword) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login === regLogin  )

        if(user) {
            return {
                error:'Такой пользователь уже занят',
                res: null
            }
        }

        await 

        const session = {
            Logout() {
                Object.keys(session).forEach((key) => {
                    delete session[key]
                })
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